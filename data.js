db.users.insertMany([
  {
    _id: ObjectId(),
    name: "Alessandra Beccera",
    email: "alessandra.beccera@digitalmemory.com",
    password: "hashedPassword1",
    role: "admin",
    creation_date: new Date(),
    update_date: new Date()
  },
  {
    _id: ObjectId(),
    name: "Gabriel Gordon",
    email: "gabriel.gordon@digitalmemory.com",
    password: "hashedPassword2",
    role: "manager",
    creation_date: new Date(),
    update_date: new Date()
  }
]);

db.social_accounts.insertMany([
  {
    _id: ObjectId(),
    platform: "facebook",
    account_name: "DigitalMemoryPage",
    page_id: "1234567890",
    access_token: "EAAB…",
    connected_by: ObjectId("…"), 
    creation_date: new Date(),
    update_date: new Date()
  },
  {
    _id: ObjectId(),
    platform: "instagram",
    account_name: "digital_memory",
    page_id: "0987654321",
    access_token: "IGQV…",
    connected_by: ObjectId("…"),
    creation_date: new Date(),
    update_date: new Date()
  },
  {
    _id: ObjectId(),
    platform: "tiktok",
    account_name: "digitalmemory_official",
    page_id: "11223344",
    access_token: "TTQS…",
    connected_by: ObjectId("…"),
    creation_date: new Date(),
    update_date: new Date()
  },
  {
    _id: ObjectId(),
    platform: "twitter",
    account_name: "DigitalMemory",
    page_id: "55667788",
    access_token: "TWTR…",
    connected_by: ObjectId("…"),
    creation_date: new Date(),
    update_date: new Date()
  }
]);


db.scheduled_posts.insertMany([
  {
    _id: ObjectId(),
    account_id: ObjectId("…"),
    content: "Lanzamos nuevo producto de verano ☀️",
    media_url: "images/Ryzen.jpg",
    scheduled_date: new Date("2025-07-10T10:00:00Z"),
    status: "pending",
    creation_date: new Date(),
    update_date: new Date()
  },
  {
    _id: ObjectId(),
    account_id: ObjectId("…"),
    content: "Nuevo Ingreso de Tarjeta Gráfica 🎥",
    media_url: "images/Grafica.jpg",
    scheduled_date: new Date("2025-07-11T15:00:00Z"),
    status: "pending",
    creation_date: new Date(),
    update_date: new Date()
  }
]);


db.published_posts.insertMany([
  {
    _id: ObjectId(),
    account_id: ObjectId("…"),
    content: "Recomendacion de las mejores Motherboards para Gaming 🖥️",
    media_url: "images/Motherboard.png",
    published_date: new Date("2025-07-05T12:00:00Z"),
    post_id: "tk12345",
    creation_date: new Date(),
    update_date: new Date()
  }
]);

db.metrics.insertMany([
  {
    _id: ObjectId(),
    post_id: ObjectId("…"),         
    platform: "tiktok",
    impressions: 10234,
    likes: 850,
    shares: 120,
    comments: 45,
    collected_at: new Date("2025-07-06T03:00:00Z")
  },
  {
    _id: ObjectId(),
    post_id: ObjectId("…"),         
    platform: "facebook",
    impressions: 0,
    likes: 0,
    shares: 0,
    comments: 0,
    collected_at: new Date("2025-07-06T03:00:00Z")
  }
]);
