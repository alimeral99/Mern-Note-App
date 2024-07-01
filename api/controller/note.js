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

  try {
    await newPost.save();
    res.status(201).json("success");
  } catch (error) {
    next(error);
  }
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
};
