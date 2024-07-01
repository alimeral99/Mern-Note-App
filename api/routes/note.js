const express = require("express");
const router = express.Router();

const { addNote } = require("../controller/note");

const { authenticateToken } = require("../utils/authMiddleWare");

router.post("/addNote", authenticateToken, addNote);

module.exports = router;
