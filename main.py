from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.staticfiles import StaticFiles
from pydantic import BaseModel
import os
import psycopg2
from pymongo import MongoClient
from datetime import datetime
from typing import List, Optional

app = FastAPI(title="Hybrid E-Commerce API")

# Database connections
def get_pg_conn():
    return psycopg2.connect(
        dbname="ecommerce_hybrid",
        user="user",
        password="password",
        host="localhost",
        port="5433"
    )

mongo_client = MongoClient("mongodb://root:rootpassword@127.0.0.1:27018/?authSource=admin")
mongo_db = mongo_client["ecommerce_hybrid"]
product_details_col = mongo_db["product_details"]
user_activity_col = mongo_db["user_activity"]

# Models
class ProductDetails(BaseModel):
    description: str
    images: Optional[List[str]] = []
    attributes: Optional[dict] = {}

class AddProductRequest(BaseModel):
    product_id: int
    name: str
    price: float
    stock: int
    category: str
    description: str

class PlaceOrderSimple(BaseModel):
    user_id: int
    product_id: int
    quantity: int

class ReviewRequest(BaseModel):
    product_id: int
    user_id: int
    rating: int
    comment: str

def log_user_activity(user_id: int, action_type: str, product_id: Optional[int], details: dict):
    """Background task to asynchronously log user activity in MongoDB"""
    action = {
        "type": action_type,
        "product_id": product_id,
        "timestamp": datetime.utcnow(),
        "details": details
    }
    # Using 'activity_log' to match repo's naming convention
    mongo_db["activity_log"].update_one(
        {"user_id": user_id},
        {"$push": {"actions": action}},
        upsert=True
    )

# 0. Get all products for frontend
@app.get("/products")
def get_products():
    pg_conn = get_pg_conn()
    pg_cursor = pg_conn.cursor()
    try:
        pg_cursor.execute("SELECT id, name, price, stock_quantity, category FROM products LIMIT 12;")
        rows = pg_cursor.fetchall()
        
        products = []
        for row in rows:
            p_id, name, price, stock, category = row
            mongo_doc = product_details_col.find_one({"product_id": p_id}, {"images": 1, "description": 1, "_id": 0})
            image = mongo_doc.get("images", ["https://via.placeholder.com/300"])[0] if mongo_doc and mongo_doc.get("images") else "https://via.placeholder.com/300"
            desc = mongo_doc.get("description", "") if mongo_doc else ""
            products.append({
                "id": p_id,
                "name": name,
                "price": price,
                "stock_quantity": stock,
                "category": category,
                "image": image,
                "description": desc
            })
        return products
    finally:
        pg_cursor.close()
        pg_conn.close()

# 1. Add new product
@app.post("/products", status_code=201)
def add_product(req: AddProductRequest):
    pg_conn = get_pg_conn()
    pg_cursor = pg_conn.cursor()
    try:
        # SQL Insert
        pg_cursor.execute(
            "INSERT INTO products (id, name, price, stock_quantity, category) VALUES (%s, %s, %s, %s, %s) RETURNING id;",
            (req.product_id, req.name, req.price, req.stock, req.category)
        )
        product_id = pg_cursor.fetchone()[0]
        pg_conn.commit()
        
        # MongoDB Insert
        product_details_col.insert_one({
            "product_id": product_id,
            "description": req.description,
            "reviews": []
        })
        return {"message": "✔ Product added successfully", "product_id": product_id}
    except Exception as e:
        pg_conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        pg_cursor.close()
        pg_conn.close()

# 2. Place an order (Simple version)
@app.post("/place_order", status_code=201)
def place_order(req: PlaceOrderSimple, background_tasks: BackgroundTasks):
    pg_conn = get_pg_conn()
    pg_cursor = pg_conn.cursor()
    try:
        # Lock the row and check stock
        pg_cursor.execute(
            "SELECT stock_quantity, price FROM products WHERE id = %s FOR UPDATE;", 
            (req.product_id,)
        )
        result = pg_cursor.fetchone()
        if not result:
            raise ValueError(f"Product {req.product_id} not found.")
        
        stock_quantity, price = result
        if stock_quantity < req.quantity:
            raise ValueError(f"Insufficient stock for product {req.product_id}.")
        
        # Reduce stock
        pg_cursor.execute(
            "UPDATE products SET stock_quantity = stock_quantity - %s WHERE id = %s;",
            (req.quantity, req.product_id)
        )
        
        total_amount = float(price) * req.quantity

        # Insert Order
        pg_cursor.execute(
            "INSERT INTO orders (user_id, total_amount, status) VALUES (%s, %s, %s) RETURNING id;",
            (req.user_id, total_amount, 'PENDING')
        )
        order_id = pg_cursor.fetchone()[0]

        # Insert Order Item
        pg_cursor.execute(
            "INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES (%s, %s, %s, %s);",
            (order_id, req.product_id, req.quantity, price)
        )

        pg_conn.commit()
        
        # Log to MongoDB
        background_tasks.add_task(
            log_user_activity, 
            req.user_id, 
            "PLACE_ORDER", 
            req.product_id, 
            {"order_id": order_id, "amount": total_amount}
        )

        return {"message": "✔ Order placed successfully", "order_id": order_id, "total": total_amount}
    except ValueError as ve:
        pg_conn.rollback()
        raise HTTPException(status_code=400, detail=str(ve))
    except Exception as e:
        pg_conn.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        pg_cursor.close()
        pg_conn.close()

# 3. View product detail (Hybrid Read)
@app.get("/view_product")
def view_product(product_id: int):
    pg_conn = get_pg_conn()
    pg_cursor = pg_conn.cursor()
    try:
        # Get from SQL
        pg_cursor.execute("SELECT name, price, stock_quantity, category FROM products WHERE id = %s;", (product_id,))
        sql_result = pg_cursor.fetchone()
        if not sql_result:
            raise HTTPException(status_code=404, detail="Product not found in SQL")
        
        name, price, stock, category = sql_result

        # Get from MongoDB
        mongo_doc = product_details_col.find_one({"product_id": product_id}, {"_id": 0})
        
        # Calculate Average Rating
        reviews = mongo_doc.get("reviews", []) if mongo_doc else []
        avg_rating = sum(r["rating"] for r in reviews) / len(reviews) if reviews else 0

        return {
            "id": product_id,
            "name": name,
            "price": price,
            "stock_quantity": stock,
            "category": category,
            "description": mongo_doc.get("description", "") if mongo_doc else "",
            "reviews": reviews,
            "average_rating": round(avg_rating, 2)
        }
    finally:
        pg_cursor.close()
        pg_conn.close()

# 4. Add customer review
@app.post("/add_review", status_code=201)
def add_review(req: ReviewRequest, product_id: Optional[int] = None):
    # Support both path param and body product_id
    p_id = product_id or getattr(req, 'product_id', None)
    
    review = {
        "user_id": req.user_id,
        "rating": req.rating,
        "comment": req.comment,
        "date": datetime.utcnow()
    }
    result = product_details_col.update_one(
        {"product_id": p_id},
        {"$push": {"reviews": review}},
        upsert=True
    )
    return {"message": "✔ Review added successfully"}

# 5. User purchase history (Bonus: combined with MongoDB activity)
@app.get("/users/{user_id}/history")
def get_user_history(user_id: int):
    pg_conn = get_pg_conn()
    pg_cursor = pg_conn.cursor()
    try:
        # SQL JOIN query to get full order history
        query = """
            SELECT o.id as order_id, o.total_amount, o.status, o.order_date,
                   oi.product_id, p.name, oi.quantity, oi.price_at_purchase
            FROM orders o
            JOIN order_items oi ON o.id = oi.order_id
            JOIN products p ON oi.product_id = p.id
            WHERE o.user_id = %s
            ORDER BY o.order_date DESC;
        """
        pg_cursor.execute(query, (user_id,))
        rows = pg_cursor.fetchall()
        
        # Group by order
        orders = {}
        for row in rows:
            o_id, t_amount, status, o_date, p_id, p_name, qty, price = row
            if o_id not in orders:
                orders[o_id] = {
                    "order_id": o_id,
                    "total_amount": float(t_amount),
                    "status": status,
                    "order_date": o_date,
                    "items": []
                }
            orders[o_id]["items"].append({
                "product_id": p_id,
                "product_name": p_name,
                "quantity": qty,
                "price": float(price)
            })

        # Get MongoDB User Activity
        user_activity = mongo_db["activity_log"].find_one({"user_id": user_id}, {"_id": 0})
        actions = user_activity.get("actions", []) if user_activity else []

        return {
            "user_id": user_id,
            "purchase_history": list(orders.values()),
            "recent_activity": sorted(actions, key=lambda x: x["timestamp"], reverse=True)[:10]
        }
    finally:
        pg_cursor.close()
        pg_conn.close()

os.makedirs("static", exist_ok=True)
app.mount("/", StaticFiles(directory="static", html=True), name="static")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
