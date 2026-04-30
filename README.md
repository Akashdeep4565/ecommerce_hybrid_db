# Hybrid E-Commerce System - Task 2 Setup Instructions

## Prerequisites
- Docker & Docker Compose installed
- Python 3.8+ installed

## Step 1: Start the Databases
We use Docker Compose to easily spin up both PostgreSQL and MongoDB simultaneously.
1. Open a terminal in this directory.
2. Run the following command:
   ```bash
   docker-compose up -d
   ```
   *Note: PostgreSQL will automatically initialize with the schemas defined in `schema.sql` when the container starts for the first time.*

## Step 2: Install Python Dependencies
We have a Python script to populate the required sample data (50 products, 20 users, 20 orders, 20 reviews).
1. Create a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
2. Install the required packages:
   ```bash
   pip install -r requirements.txt
   ```

## Step 3: Populate Data
Run the population script to fill both PostgreSQL and MongoDB:
```bash
python populate_data.py
```

## Step 4: Verify the Data (Screenshots for submission)
To capture screenshots for your submission:

**For PostgreSQL:**
You can use DBeaver, pgAdmin, or the CLI:
```bash
docker exec -it hybrid_postgres psql -U user -d ecommerce_hybrid
# Then run the following queries and take screenshots:
# \dt
# SELECT * FROM users LIMIT 5;
# SELECT * FROM products LIMIT 5;
# SELECT * FROM orders LIMIT 5;
```

**For MongoDB:**
You can use MongoDB Compass or the CLI:
```bash
docker exec -it hybrid_mongodb mongosh -u root -p rootpassword --authenticationDatabase admin
# Then run the following and take screenshots:
# use ecommerce_hybrid
# db.product_details.find().limit(2).pretty()
# db.user_activity.find().limit(2).pretty()
```
*Make sure your screenshots show the document structures including the rich details and embedded reviews.*
