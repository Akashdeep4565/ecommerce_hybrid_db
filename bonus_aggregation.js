// Bonus: MongoDB aggregation for top-rated products
use ecommerce_hybrid;

db.product_details.aggregate([
  // Step 1: Filter out products with no reviews
  { $match: { "reviews.0": { $exists: true } } },
  
  // Step 2: Unwind the reviews array to calculate stats
  { $unwind: "$reviews" },
  
  // Step 3: Group by product and calculate average rating and review count
  { 
    $group: {
      _id: "$product_id",
      avgRating: { $avg: "$reviews.rating" },
      numReviews: { $sum: 1 },
      productInfo: { $first: "$$ROOT" }
    }
  },
  
  // Step 4: Sort by average rating descending, then number of reviews descending
  { $sort: { avgRating: -1, numReviews: -1 } },
  
  // Step 5: Limit to top 5
  { $limit: 5 },
  
  // Step 6: Project final output
  {
    $project: {
      _id: 0,
      product_id: "$_id",
      avgRating: { $round: ["$avgRating", 2] },
      numReviews: 1,
      description: "$productInfo.description"
    }
  }
]);
