const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, console.log("Server running on port 5000"));
