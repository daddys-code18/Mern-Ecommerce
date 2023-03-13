const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// handling UnCaught Expection
process.on("uncaughtException", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting Down the Server due to UnCaught Expection ");
  process.exit(1);
});

// config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is Working on  http://localhost:${process.env.PORT}`);
});

//unhandlePromise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error:${err.message}`);
  console.log("Shutting Down the Server due to unhandle promise Rejection");
  server.close(() => {
    process.exit(1);
  });
});
