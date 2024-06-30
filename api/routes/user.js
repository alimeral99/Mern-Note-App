const express = require("express");
const router = express.Router();

const { register, login, auth } = require("../controller/user");

router.post("/register", register);
router.post("/login", login);

module.exports = router;
