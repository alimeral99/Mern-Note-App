const express = require("express");
const router = express.Router();

const { addNote, getAllNote } = require("../controller/note");

const { authenticateToken } = require("../utils/authMiddleWare");

router.get("/all", authenticateToken, getAllNote);

router.post("/addNote", authenticateToken, addNote);

module.exports = router;
