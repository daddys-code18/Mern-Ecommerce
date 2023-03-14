const ErroHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncError");
const User = require("../models/userModel");

//Rwgister a User

exports.registerUser = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: "this is a  sample id",
      url: "profileepic1",
    },
  });
  const token = user.getJWTToken();
  console.log(token);
  res.status(201).json({
    success: true,
    token,
  });
});

//Login User

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;
  //checking if user has given password and email both

  if (!email || !password) {
    return next(new ErroHandler("Please Enter Email $ Password", 400));
  }
  const user = User.findOne({ email }).select("+password");
  if (!user) {
    return next(new ErroHandler(" Invalid Email & Password", 401));
  }
  const isPasswordMatched = user.comparePassword();
  if (!isPasswordMatched) {
    return next(new ErroHandler(" Invalid Email 0r Password", 401));
  }
  const token = user.getJWTToken();
  console.log(token);
  res.status(200).json({
    success: true,
    token,
  });
});
