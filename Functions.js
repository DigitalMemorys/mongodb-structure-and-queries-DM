function getUsersByCity(cityName) {
  return db.users.aggregate([
    {
      $lookup: {
        from: "ubi_geo",
        localField: "ubi_geo_id",
        foreignField: "_id",
        as: "location"
      }
    },
    { $unwind: "$location" },
    { $match: { "location.city_name": cityName } }
  ]).toArray();
}

function getProductsByCategory(categoryName) {
  return db.products.aggregate([
    {
      $lookup: {
        from: "categories",
        localField: "category_id",
        foreignField: "_id",
        as: "category"
      }
    },
    { $unwind: "$category" },
    { $match: { "category.category_name": categoryName } }
  ]).toArray();
}

function countAvailableProducts() {
  return db.products.countDocuments({ unit_in_stock: { $gt: 0 } });
}

function getOrdersByDate(date) {
  return db.orders.find({
    order_date: {
      $gte: new Date(date + "T00:00:00Z"),
      $lt: new Date(date + "T23:59:59Z")
    }
  }).toArray();
}

function getOrderDetails(orderId) {
  return db.order_details.aggregate([
    { $match: { order_id: ObjectId(orderId) } },
    {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product"
      }
    },
    {
      $lookup: {
        from: "status_delivers",
        localField: "status_deliver_id",
        foreignField: "_id",
        as: "status"
      }
    },
    {
      $project: {
        unit_price: 1,
        quantity: 1,
        "product.name": 1,
        "status.type": 1
      }
    }
  ]).toArray();
}

function countOrdersOnTheWay() {
  let statusId = db.status_delivers.findOne({ type: "En camino" })._id;
  return db.order_details.countDocuments({ status_deliver_id: statusId });
}

function aggregateProductSales() {
  return db.order_details.aggregate([
    {
      $group: {
        _id: "$product_id",
        totalQuantitySold: { $sum: "$quantity" },
        totalRevenue: { $sum: { $multiply: ["$quantity", "$unit_price"] } }
      }
    },
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "_id",
        as: "product"
      }
    },
    {
      $project: {
        totalQuantitySold: 1,
        totalRevenue: 1,
        "product.name": 1
      }
    }
  ]).toArray();
}

function getDiscontinuedProducts() {
  return db.products.find({ discontinued: 1 }).toArray();
}

function getRecentOrders(limit) {
  return db.orders.find()
    .sort({ order_date: -1 })
    .limit(limit)
    .toArray();
}

