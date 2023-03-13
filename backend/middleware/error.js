const ErroHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Error";
  //Wrong MongoDb Id Error
  if (err.name === "CastError") {
    const message = `Resource not found Invalid:${err.path}`;
    err = new ErroHandler(message, 400);
  }

  res.status(err.statusCode).json({
    success: true,
    message: err.message,
  });
};
