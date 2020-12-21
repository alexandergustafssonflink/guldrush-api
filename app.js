const express = require("express");
const app = express();
const mongoose = require("mongoose");
let port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
require("dotenv/config");
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("Connected to DB");
});

app.use(bodyParser.json());

const productRoute = require("./routes/products");
app.use("/products", productRoute);

app.get("/", (req, res) => {
  res.send("We are HOME!");
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
