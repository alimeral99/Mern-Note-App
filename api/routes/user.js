const express = require("express");
const router = express.Router();

const { register, login, auth } = require("../controller/user");

router.post("/register", register);

module.exports = router;
