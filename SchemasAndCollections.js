const ubiGeoSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["city_name", "country_name"],
    properties: {
      city_name: { bsonType: "string" },
      country_name: { bsonType: "string" }
    }
  }
};

const usersSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "email", "password"],
    properties: {
      name: { bsonType: "string" },
      email: { bsonType: "string", pattern: "^.+@.+\\..+$" },
      password: { bsonType: "string" },
      phone: { bsonType: "string" },
      address: { bsonType: "string" },
      ubi_geo_id: { bsonType: "objectId" }
    }
  }
};

const categoriesSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["category_name"],
    properties: {
      category_name: { bsonType: "string" },
      description: { bsonType: "string" }
    }
  }
};

const productsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["name", "unit_price", "category_id", "image_url"],
    properties: {
      name: { bsonType: "string" },
      unit_price: { bsonType: "double" },
      unit_in_stock: { bsonType: "int" },
      unit_on_order: { bsonType: "int" },
      discontinued: { bsonType: "int" },
      category_id: { bsonType: "objectId" },
      image_url: { bsonType: "string" }
    }
  }
};

const ordersSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["order_date", "user_id"],
    properties: {
      order_date: { bsonType: "date" },
      ship_name: { bsonType: "string" },
      ship_address: { bsonType: "string" },
      ship_city: { bsonType: "string" },
      ship_region: { bsonType: "string" },
      ship_country: { bsonType: "string" },
      ship_date: { bsonType: "date" },
      user_id: { bsonType: "objectId" }
    }
  }
};

const statusDeliversSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["type"],
    properties: {
      type: { bsonType: "string" }
    }
  }
};


const orderDetailsSchema = {
  $jsonSchema: {
    bsonType: "object",
    required: ["unit_price", "quantity", "product_id", "status_deliver_id", "order_id"],
    properties: {
      unit_price: { bsonType: "double" },
      quantity: { bsonType: "int" },
      product_id: { bsonType: "objectId" },
      status_deliver_id: { bsonType: "objectId" },
      order_id: { bsonType: "objectId" }
    }
  }
};


db.createCollection("ubi_geo", {
  validator: ubiGeoSchema,
  validationLevel: "strict"
});

db.createCollection("users", {
  validator: usersSchema,
  validationLevel: "strict"
});

db.createCollection("categories", {
  validator: categoriesSchema,
  validationLevel: "strict"
});

db.createCollection("products", {
  validator: productsSchema,
  validationLevel: "strict"
});

db.createCollection("orders", {
  validator: ordersSchema,
  validationLevel: "strict"
});

db.createCollection("status_delivers", {
  validator: statusDeliversSchema,
  validationLevel: "strict"
});

db.createCollection("order_details", {
  validator: orderDetailsSchema,
  validationLevel: "strict"
});
