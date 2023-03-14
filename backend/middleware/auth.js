const catchAsyncErrors = require("./catchAsyncError");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const ErroHandler = require("../utils/errorhandler");

exports.isAuthenticatedUser = catchAsyncErrors(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return next(new ErroHandler("Please login to access this Resource", 401));
  }
  const decodeData = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decodeData.id);
  next();
});
