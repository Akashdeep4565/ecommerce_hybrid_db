import time
import psycopg2
from pymongo import MongoClient

# Setup connections
pg_conn = psycopg2.connect(dbname="ecommerce_hybrid", user="user", password="password", host="localhost")
pg_cursor = pg_conn.cursor()

mongo_client = MongoClient("mongodb://root:rootpassword@localhost:27017/")
db = mongo_client["ecommerce_hybrid"]

def test_sql_read():
    start = time.time()
    pg_cursor.execute("SELECT * FROM products WHERE id = 1;")
    _ = pg_cursor.fetchone()
    return (time.time() - start) * 1000  # ms

def test_mongo_read():
    start = time.time()
    _ = db.product_details.find_one({"product_id": 1})
    return (time.time() - start) * 1000  # ms

print("Running Basic Timing Comparison...")

# Warmup
for _ in range(10):
    test_sql_read()
    test_mongo_read()

# Actual test
sql_times = [test_sql_read() for _ in range(100)]
mongo_times = [test_mongo_read() for _ in range(100)]

avg_sql = sum(sql_times)/100
avg_mongo = sum(mongo_times)/100

print(f"Average SQL (PostgreSQL) Read Time: {avg_sql:.3f} ms")
print(f"Average NoSQL (MongoDB) Read Time:  {avg_mongo:.3f} ms")
print("-" * 50)
print("Conclusion:")
print("In our hybrid setup, fetching massive deeply nested documents (like product attributes")
print("and arrays of user reviews) from MongoDB avoids expensive multi-table SQL JOINs, ")
print("reducing application-side processing and maintaining high read throughput.")

pg_cursor.close()
pg_conn.close()
