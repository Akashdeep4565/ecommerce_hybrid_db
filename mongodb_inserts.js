// Sample MongoDB Insert Commands for Hybrid E-Commerce System

// Select the database
use ecommerce_hybrid;

// 1. Insert into product_details collection
db.product_details.insertMany([
  {
    product_id: 1, // Links to PostgreSQL products.id
    description: "Latest high-end smartphone with an incredible camera and long-lasting battery.",
    images: [
      "https://example.com/images/phone1_front.jpg",
      "https://example.com/images/phone1_back.jpg"
    ],
    attributes: {
      brand: "TechBrand",
      color: "Midnight Black",
      storage: "256GB",
      ram: "8GB"
    },
    reviews: [
      {
        user_id: 2,
        rating: 5,
        comment: "Amazing phone! The camera is the best I've ever used.",
        date: new Date("2026-03-01T10:00:00Z")
      },
      {
        user_id: 3,
        rating: 4,
        comment: "Great device, but a bit too expensive.",
        date: new Date("2026-03-02T14:30:00Z")
      }
    ]
  },
  {
    product_id: 2,
    description: "Comfortable and stylish running shoes for everyday use.",
    images: [
      "https://example.com/images/shoes_side.jpg"
    ],
    attributes: {
      brand: "RunFit",
      color: "Neon Green",
      size: "10 US",
      material: "Mesh"
    },
    reviews: []
  }
]);

// 2. Insert into user_activity collection
db.user_activity.insertMany([
  {
    user_id: 1, // Links to PostgreSQL users.id
    actions: [
      {
        type: "view_product",
        product_id: 1,
        timestamp: new Date("2026-03-05T09:15:00Z"),
        details: { source: "homepage_banner" }
      },
      {
        type: "add_to_cart",
        product_id: 1,
        timestamp: new Date("2026-03-05T09:20:00Z"),
        details: { quantity: 1 }
      }
    ]
  },
  {
    user_id: 2,
    actions: [
      {
        type: "search",
        product_id: null,
        timestamp: new Date("2026-03-05T11:00:00Z"),
        details: { query: "running shoes" }
      },
      {
        type: "view_product",
        product_id: 2,
        timestamp: new Date("2026-03-05T11:05:00Z"),
        details: { source: "search_results" }
      }
    ]
  }
]);
