const express = require("express");
const router = express.Router();

const {
  addNote,
  getAllNote,
  getNote,
  updateNote,
} = require("../controller/note");

const { authenticateToken } = require("../utils/authMiddleWare");

router.get("/all", authenticateToken, getAllNote);
router.get("/details/:id", authenticateToken, getNote);

router.post("/addNote", authenticateToken, addNote);
router.patch("/update", authenticateToken, updateNote);

module.exports = router;
