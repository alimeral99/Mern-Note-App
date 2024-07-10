const Note = require("../models/note");

const addNote = async (req, res, next) => {
  const { title, note } = req.body;

  const newPost = new Note({
    title,
    note,
    date: new Date(),
    color: getRandomColor(),
    userId: req.user.id,
  });

  console.log(newPost);
  try {
    await newPost.save();
    res.status(201).json("success");
  } catch (error) {
    next(error);
  }
};
const getNote = async (req, res, next) => {
  const note = await Note.findOne({ userId: req.user.id, _id: req.params.id });

  res.status(200).json(note);
};

const getAllNote = async (req, res, next) => {
  const notes = await Note.find({ userId: req.user.id });

  res.status(200).json(notes);
};

const updateNote = async (req, res, next) => {
  const { id } = req.body.contentNote;
  const updatedNote = await Note.findByIdAndUpdate(id, req.body.contentNote, {
    new: true,
  });

  res.status(200).json(updatedNote);
};

const deleteNote = async (req, res, next) => {
  await Note.findByIdAndDelete(req.params.id);
  res.status(200).json("The Note has been deleted");
};

function getRandomColor() {
  var letters = "BCDEF".split("");
  var randomColor = "#";
  for (var i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * letters.length)];
  }

  return randomColor;
}

module.exports = {
  addNote,
  getAllNote,
  getNote,
  updateNote,
  deleteNote,
};
