const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { errorHandler } = require("../utils/error");

const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) return next(errorHandler(401, "User already registered."));

    const hashedPassword = bcryptjs.hashSync(password, 10);

    user = new User({ username, email, password: hashedPassword });
    await user.save();

    user.password = null;

    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return next(errorHandler(404, "User not found!"));

  const match = bcryptjs.compareSync(password, user.password);
  if (!match) return next(errorHandler(401, "Wrong password!"));

  user.password = null;

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  if (token) {
    res.status(200).json({ user, token });
  }
};

const auth = async (req, res, next) => {
  const { token } = req.body;

  if (!token) return next(errorHandler(401, "Unauthorized."));

  try {
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(verifyToken.id);
    user.password = null;

    return res.json(user);
  } catch (e) {
    return next(errorHandler(401, "invalid token"));
  }
};

module.exports = {
  register,
  login,
};
