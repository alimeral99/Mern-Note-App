const mongoose = require("mongoose");
const { Schema } = mongoose;

const noteSchema = new Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: { type: String },
    note: { type: String, required: true },
    color: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
