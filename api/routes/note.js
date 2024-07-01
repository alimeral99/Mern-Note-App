const express = require("express");
const router = express.Router();

const { authenticateToken } = require("../utils/authMiddleWare");

router.post("/addNote", authenticateToken, addNote);

module.exports = router;
