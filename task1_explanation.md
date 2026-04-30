# Data Modeling Explanation: Hybrid E-Commerce System

## Architecture Overview
Our application uses a hybrid polyglot persistence architecture. We are combining a relational database (PostgreSQL) and a document database (MongoDB) to leverage the strengths of each system according to the specific characteristics of our data.

## Relational Model (PostgreSQL)
We chose PostgreSQL to store our transactional and highly structured data. This data requires strict ACID properties (Atomicity, Consistency, Isolation, Durability) to ensure that operations like payment processing, stock deductions, and order placements are reliable and consistent.

- **`users` Table:** Stores core identity and authentication information. The schema is strict because fields like `email` and `password_hash` are uniform across all users.
- **`products` Table:** Contains the most essential, structured properties of a product: `id`, `name`, `price`, `stock_quantity`, and `category`. Maintaining inventory (`stock_quantity`) in an ACID-compliant database is critical to prevent overselling during high concurrency.
- **`orders` & `order_items` Tables:** These tables capture the financial transactions. They use Foreign Keys to maintain referential integrity. An order must point to a valid user, and an order item must point to a valid product. If an order is placed, both the `orders` entry and the corresponding `order_items` must be committed as a single atomic transaction.

## Document Model (MongoDB)
We chose MongoDB for our semi-structured, highly flexible, and read-heavy data. This data benefits from the BASE (Basically Available, Soft state, Eventual consistency) model, providing excellent scalability and performance.

- **`product_details` Collection:** While the core product info is in SQL, the rich details are in MongoDB. A document here is linked to PostgreSQL via the `product_id` field. We embed `images`, `attributes`, and `reviews` within a single document. 
  - *Why?* E-commerce products have vastly different attributes (a smartphone has RAM; a shoe has a size). A relational database would require complex EAV (Entity-Attribute-Value) tables or sparse columns. MongoDB handles this fluid schema effortlessly. Furthermore, embedding `reviews` allows a single quick read query to fetch all product details and reviews required to render the product page.
- **`user_activity` Collection:** Captures clickstream data, searches, and cart additions. 
  - *Why?* This data is generated at an extremely high velocity. Strict schema enforcement and complex joins are unnecessary here. Logging this as an array of sub-documents for each `user_id` allows rapid insertions and easy analytics later (e.g., using MongoDB Aggregation pipelines) without bogging down the transactional PostgreSQL server.

## Summary
By isolating the critical transactional data in PostgreSQL and the heavy, flexible read/write data in MongoDB, our system achieves strong data integrity where it matters, and high scalability and performance for the catalog and analytics features.
