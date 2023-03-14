const express = require("express");
const app = express();
app.use(express.json());
const errorMiddleware = require("./middleware/error");

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);

// Middleware fo error
app.use(errorMiddleware);
module.exports = app;
