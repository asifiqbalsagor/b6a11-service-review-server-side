const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
// middle wares
app.use(cors());
app.use(express.json());
// Mongo password
// 7ftoleM5rl8wjnFL
// user name : the_cooker_life-client
app.get("/", (req, res) => {
  res.send("the cooker server is running now ");
});
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri =
  "mongodb+srv://the_cooker_life-client:7ftoleM5rl8wjnFL@cluster0.hmvlxc6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

function run() {
  try {
    const serviceCollection = client
      .db("the_cooker_life-client")
      .collection("foodservice");
    const reviewCollection = client
      .db("the_cooker_life-client")
      .collection("reviews");

    app.get("/services", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const service = await cursor.limit(3).toArray();
      res.send(service);
    });
    app.get("/allService", async (req, res) => {
      const query = {};
      const cursor = serviceCollection.find(query);
      const service = await cursor.toArray();
      res.send(service);
    });

   