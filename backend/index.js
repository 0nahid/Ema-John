const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// require the dotenv variable
require("dotenv").config();
// Connect to the database

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@products.6aa06.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  err ? console.log(err) : console.log("Connected to Database");
  //   client.close();
});

app.get("/", (req, res) =>
  res.send({ status: `Server is running on port ${port}` })
);
app.listen(port, () => console.log(`App listening on port ${port}!`));
