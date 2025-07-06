
let ubiGeoId1 = ObjectId();
let ubiGeoId2 = ObjectId();

let categoryId1 = ObjectId();
let categoryId2 = ObjectId();

let userId1 = ObjectId();
let userId2 = ObjectId();

let orderId1 = ObjectId();
let orderId2 = ObjectId();

let productId1 = ObjectId();
let productId2 = ObjectId();

let statusDeliverId1 = ObjectId();
let statusDeliverId2 = ObjectId();


db.ubi_geo.insertMany([
  {
    _id: ubiGeoId1,
    city_name: "Lima",
    country_name: "Perú"
  },
  {
    _id: ubiGeoId2,
    city_name: "Arequipa",
    country_name: "Perú"
  }
]);


db.users.insertMany([
  {
    _id: userId1,
    name: "Fabricio Benites",
    email: "fabricio.benites@digitalmemory.com",
    password: "hashedPwd123",
    phone: "+51987654321",
    address: "Av. Brasil 1234",
    ubi_geo_id: ubiGeoId1
  },
  {
    _id: userId2,
    name: "Joel Uriol",
    email: "joel.uriol@digitalmemory.com",
    password: "hashedPwd456",
    phone: "+51976543210",
    address: "Av. La Marina 5678",
    ubi_geo_id: ubiGeoId2
  }
]);


db.categories.insertMany([
  {
    _id: categoryId1,
    category_name: "Procesadores",
    description: "CPUs de última generación"
  },
  {
    _id: categoryId2,
    category_name: "Tarjetas Gráficas",
    description: "GPUs para gaming y diseño"
  }
]);


db.products.insertMany([
  {
    _id: productId1,
    name: "AMD Ryzen 9 7900X",
    unit_price: 1999.90,
    unit_in_stock: 25,
    unit_on_order: 10,
    discontinued: 0,
    category_id: categoryId1,
    image_url: "images/ryzen9.png"
  },
  {
    _id: productId2,
    name: "NVIDIA RTX 4080",
    unit_price: 4599.90,
    unit_in_stock: 15,
    unit_on_order: 5,
    discontinued: 0,
    category_id: categoryId2,
    image_url: "images/rtx4080.png"
  }
]);

db.orders.insertMany([
  {
    _id: orderId1,
    order_date: new Date("2025-07-06T10:00:00Z"),
    ship_name: "Fabricio Benites",
    ship_address: "Av. Brasil 1234",
    ship_city: "Lima",
    ship_region: "Lima Metropolitana",
    ship_country: "Perú",
    ship_date: new Date("2025-07-10T10:00:00Z"),
    user_id: userId1
  },
  {
    _id: orderId2,
    order_date: new Date("2025-07-07T15:00:00Z"),
    ship_name: "Joel Uriol",
    ship_address: "Av. La Marina 5678",
    ship_city: "Arequipa",
    ship_region: "Arequipa",
    ship_country: "Perú",
    ship_date: new Date("2025-07-12T12:00:00Z"),
    user_id: userId2
  }
]);


db.status_delivers.insertMany([
  {
    _id: statusDeliverId1,
    type: "En camino"
  },
  {
    _id: statusDeliverId2,
    type: "Entregado"
  }
]);


db.order_details.insertMany([
  {
    unit_price: 1999.90,
    quantity: 1,
    product_id: productId1,
    status_deliver_id: statusDeliverId1,
    order_id: orderId1
  },
  {
    unit_price: 4599.90,
    quantity: 2,
    product_id: productId2,
    status_deliver_id: statusDeliverId2,
    order_id: orderId2
  }
]);
