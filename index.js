const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");

const productRoute = require("./routes/product.route");

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//  Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello World Updated!");
});

mongoose
  .connect(
    "mongodb+srv://princeben9312:hUHoLKmBmlLVfA0X@backenddb.v0ozh.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDb"
  )
  .then(() => {
    console.log("Connection Successfull");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
