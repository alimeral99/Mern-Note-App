const express = require("express");
const router = express.Router();

const {
  addNote,
  getAllNote,
  getNote,
  updateNote,
  deleteNote,
} = require("../controller/note");

const { authenticateToken } = require("../utils/authMiddleWare");

router.get("/all", authenticateToken, getAllNote);
router.get("/details/:id", authenticateToken, getNote);

router.post("/addNote", authenticateToken, addNote);
router.patch("/update", authenticateToken, updateNote);

router.delete("/delete/:id", authenticateToken, deleteNote);

module.exports = router;
