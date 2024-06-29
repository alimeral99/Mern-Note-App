const User = require("../models/user");
const bcryptjs = require("bcryptjs");

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

module.exports = {
  register,
};
