const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();



const app = express();
app.use(express.json());
app.use(cookieParser());
const port = process.env.PORT || 5000;

app.use(
  cors({
    origin: "https://mern-note-app-1.onrender.com",
    credentials: true,
    methods: "PATCH,DELETE,POST,GET",
  })
);


const userRouter = require("./routes/user");
const noteRouter = require("./routes/note");

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/note", noteRouter);
app.use("/user", userRouter);

mongoose
  .connect(process.env.DB_URI)
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    status: false,
    statusCode,
    message,
  });
});

app.listen(process.env.PORT, console.log("Server running on port 5000"));
