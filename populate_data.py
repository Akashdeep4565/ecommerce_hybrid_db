import psycopg2
from pymongo import MongoClient
from faker import Faker
import random
from datetime import datetime

fake = Faker()

# --- PostgreSQL Connection ---
pg_conn = psycopg2.connect(
    dbname="ecommerce_hybrid",
    user="user",
    password="password",
    host="localhost",
    port="5433"
)
pg_cursor = pg_conn.cursor()

# --- MongoDB Connection ---
mongo_client = MongoClient("mongodb://root:rootpassword@127.0.0.1:27018/?authSource=admin")
mongo_db = mongo_client["ecommerce_hybrid"]
product_details_col = mongo_db["product_details"]
user_activity_col = mongo_db["user_activity"]

def populate():
    print("Clearing existing data...")
    pg_cursor.execute("TRUNCATE TABLE order_items, orders, products, users RESTART IDENTITY CASCADE;")
    product_details_col.delete_many({})
    user_activity_col.delete_many({})
    
    print("Generating 20 Users...")
    users = []
    for _ in range(20):
        name = fake.name()
        email = fake.unique.email()
        password_hash = fake.sha256()
        created_at = fake.date_time_between(start_date='-1y', end_date='now')
        
        pg_cursor.execute(
            "INSERT INTO users (name, email, password_hash, created_at) VALUES (%s, %s, %s, %s) RETURNING id;",
            (name, email, password_hash, created_at)
        )
        user_id = pg_cursor.fetchone()[0]
        users.append(user_id)
        
    print("Generating 50 Products...")
    products = []
    
    tech_items = [
        ("Apple iPhone 15 Pro", "Mobile", 130000),
        ("Samsung Galaxy S24 Ultra", "Mobile", 130000),
        ("Google Pixel 8 Pro", "Mobile", 100000),
        ("OnePlus 12", "Mobile", 65000),
        ("Apple MacBook Pro M3", "Computer", 170000),
        ("Dell XPS 15", "Computer", 150000),
        ("Lenovo ThinkPad X1", "Computer", 140000),
        ("ASUS ROG Zephyrus G14", "Computer", 135000),
        ("Sony PlayStation 5", "Other Electronics", 50000),
        ("Microsoft Xbox Series X", "Other Electronics", 50000),
        ("Nintendo Switch OLED", "Other Electronics", 35000),
        ("Sony WH-1000XM5", "Other Electronics", 30000),
        ("Apple AirPods Pro 2", "Other Electronics", 25000),
        ("Samsung Odyssey G9", "Other Electronics", 120000),
        ("LG C3 OLED TV", "Other Electronics", 150000)
    ]

    for i in range(50):
        # Pick a random realistic item
        item = random.choice(tech_items)
        name = f"{item[0]} (Gen {random.randint(1,5)})"
        category = item[1]
        
        # Genuine price in Rupees with 0 decimal places
        base_price = item[2]
        variation = random.randint(-5000, 5000) # Slight variation
        price = round(base_price + variation)
        
        stock = random.randint(10, 100)
        
        pg_cursor.execute(
            "INSERT INTO products (name, price, stock_quantity, category) VALUES (%s, %s, %s, %s) RETURNING id;",
            (name, price, stock, category)
        )
        product_id = pg_cursor.fetchone()[0]
        products.append(product_id)
        
        # MongoDB: Insert product details
        product_details_col.insert_one({
            "product_id": product_id,
            "description": f"Premium {category.lower()} by {item[0].split()[0]}. Features state-of-the-art technology.",
            "images": [f"https://via.placeholder.com/300?text={item[0].replace(' ', '+')}"],
            "attributes": {
                "brand": item[0].split()[0],
                "color": fake.color_name()
            },
            "reviews": []
        })

    print("Generating 20 Orders...")
    for _ in range(20):
        user_id = random.choice(users)
        status = random.choice(['PENDING', 'PROCESSING', 'SHIPPED', 'DELIVERED'])
        order_date = fake.date_time_between(start_date='-6m', end_date='now')
        
        # Pick 1-3 random products for the order
        order_prods = random.sample(products, k=random.randint(1, 3))
        total_amount = 0
        
        pg_cursor.execute(
            "INSERT INTO orders (user_id, total_amount, status, order_date) VALUES (%s, %s, %s, %s) RETURNING id;",
            (user_id, 0, status, order_date) # initial total 0
        )
        order_id = pg_cursor.fetchone()[0]
        
        for p_id in order_prods:
            qty = random.randint(1, 3)
            pg_cursor.execute("SELECT price FROM products WHERE id = %s;", (p_id,))
            price = float(pg_cursor.fetchone()[0])
            total_amount += (price * qty)
            
            pg_cursor.execute(
                "INSERT INTO order_items (order_id, product_id, quantity, price_at_purchase) VALUES (%s, %s, %s, %s);",
                (order_id, p_id, qty, price)
            )
            
        pg_cursor.execute("UPDATE orders SET total_amount = %s WHERE id = %s;", (total_amount, order_id))

    print("Generating 20 Reviews...")
    for _ in range(20):
        product_id = random.choice(products)
        user_id = random.choice(users)
        review = {
            "user_id": user_id,
            "rating": random.randint(1, 5),
            "comment": fake.sentence(),
            "date": fake.date_time_between(start_date='-3m', end_date='now')
        }
        product_details_col.update_one(
            {"product_id": product_id},
            {"$push": {"reviews": review}}
        )

    # Some sample user activity
    print("Generating sample user activity...")
    for user_id in users:
        actions = []
        for _ in range(random.randint(2, 5)):
            actions.append({
                "type": random.choice(["view_product", "add_to_cart", "search"]),
                "product_id": random.choice(products),
                "timestamp": fake.date_time_between(start_date='-1m', end_date='now'),
                "details": {"source": fake.word()}
            })
        user_activity_col.insert_one({
            "user_id": user_id,
            "actions": actions
        })

    pg_conn.commit()
    print("Data population complete!")

if __name__ == "__main__":
    populate()
    pg_cursor.close()
    pg_conn.close()
    mongo_client.close()
