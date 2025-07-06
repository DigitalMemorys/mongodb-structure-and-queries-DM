function getPostsByPlatform(platform) {
  return db.published_posts.find({ platform }).toArray();
}

function getScheduledPostsByDate(date) {
  return db.scheduled_posts.find({
    scheduled_date: {
      $gte: new Date(date + "T00:00:00Z"),
      $lt: new Date(date + "T23:59:59Z")
    }
  }).toArray();
}

function countPendingScheduled() {
  return db.scheduled_posts.countDocuments({ status: "pending" });
}

function getMetricsByPost(postId) {
  return db.metrics.find({ post_id: ObjectId(postId) }).toArray();
}

function aggregateInteractions(postId) {
  return db.metrics.aggregate([
    { $match: { post_id: ObjectId(postId) } },
    {
      $group: {
        _id: "$platform",
        totalImpressions: { $sum: "$impressions" },
        totalLikes: { $sum: "$likes" },
        totalShares: { $sum: "$shares" },
        totalComments: { $sum: "$comments" }
      }
    }
  ]).toArray();
}

function getRecentMetrics(limit) {
  return db.metrics.find()
    .sort({ collected_at: -1 })
    .limit(limit)
    .toArray();
}

function getUnpublishedScheduled() {
  return db.scheduled_posts.find({ status: "pending" }).toArray();
}
