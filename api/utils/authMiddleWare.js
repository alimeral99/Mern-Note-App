const User = require("../models/user");
const { errorHandler } = require("./error");

const jwt = require("jsonwebtoken");

const authenticateToken = async (req, res, next) => {
  let token;

  console.log(req.headers.authorization);

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Get token from header
      token = req.headers.authorization.split(" ")[1];

      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get user from the token
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
      return next(errorHandler(401, "Not authorized"));
    }
  }
};

module.exports = {
  authenticateToken,
};
