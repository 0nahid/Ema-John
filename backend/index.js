const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

// require the dotenv variable
require("dotenv").config();

app.get("/", (req, res) =>
  res.send({ status: `Server is running on port ${port}` })
);
app.listen(port, () => console.log(`App listening on port ${port}!`));
