const ErroHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Error";
  res.status(err.statusCode).json({
    success: true,
    message: err.message,
  });
};
