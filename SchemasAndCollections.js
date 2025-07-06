
const usersSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "email", "password", "role"],
    properties: {
      name: { bsonType: "string" },
      email: { bsonType: "string", pattern: "^.+@.+\\..+$" },
      password: { bsonType: "string" },
      role: { enum: ["admin", "manager", "viewer"] },
      creation_date: { bsonType: "date" },
      update_date: { bsonType: "date" }
    }
  }
};

const socialAccountsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["platform", "account_name", "page_id", "access_token", "connected_by"],
    properties: {
      platform: { enum: ["facebook", "instagram", "tiktok", "twitter"] },
      account_name: { bsonType: "string" },
      page_id: { bsonType: "string" },
      access_token: { bsonType: "string" },
      connected_by: { bsonType: "objectId" },
      creation_date: { bsonType: "date" },
      update_date: { bsonType: "date" }
    }
  }
};

const scheduledPostsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["account_id", "content", "scheduled_date", "status"],
    properties: {
      account_id: { bsonType: "objectId" },
      content: { bsonType: "string" },
      media_url: { bsonType: "string" },
      scheduled_date: { bsonType: "date" },
      status: { enum: ["pending", "sent", "failed"] },
      creation_date: { bsonType: "date" },
      update_date: { bsonType: "date" }
    }
  }
};

const publishedPostsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["account_id", "content", "published_date", "post_id"],
    properties: {
      account_id: { bsonType: "objectId" },
      content: { bsonType: "string" },
      media_url: { bsonType: "string" },
      published_date: { bsonType: "date" },
      post_id: { bsonType: "string" },
      creation_date: { bsonType: "date" },
      update_date: { bsonType: "date" }
    }
  }
};

const metricsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["post_id", "platform", "collected_at"],
    properties: {
      post_id: { bsonType: "objectId" },
      platform: { enum: ["facebook", "instagram", "tiktok", "twitter"] },
      impressions: { bsonType: "int" },
      likes: { bsonType: "int" },
      shares: { bsonType: "int" },
      comments: { bsonType: "int" },
      collected_at: { bsonType: "date" }
    }
  }
};

db.createCollection("users", {
  validator: usersSchema,
  validationLevel: "strict"
});
db.createCollection("social_accounts", {
  validator: socialAccountsSchema,
  validationLevel: "strict"
});
db.createCollection("scheduled_posts", {
  validator: scheduledPostsSchema,
  validationLevel: "strict"
});
db.createCollection("published_posts", {
  validator: publishedPostsSchema,
  validationLevel: "strict"
});
db.createCollection("metrics", {
  validator: metricsSchema,
  validationLevel: "strict"
});
