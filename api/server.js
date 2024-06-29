const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, console.log("Server running on port 5000"));