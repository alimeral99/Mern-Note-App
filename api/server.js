const express = require("express");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

const userRouter = require("./routes/user");

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/user", userRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(5000, console.log("Server running on port 5000"));
