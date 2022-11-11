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


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://the_cooker_life-client:7ftoleM5rl8wjnFL@cluster0.hmvlxc6.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });







app.listen(port, () => {
  console.log(" server in running : ", { port });
});
