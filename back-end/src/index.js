require("dotenv").config();

// (async () => {
//   const database = require("./config/database");

//   try {
//     await database.sync();
//   } catch (error) {
//     console.log(error);
//   }
// })();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");

const server = express();

const ProductRoutes = require("./routes/ProductRoutes");

const APP_PORT = process.env.APP_PORT;

server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

server.use("/", ProductRoutes);

server.use(
  "/productFiles",
  express.static(path.resolve(__dirname, "uploads", "productFiles"))
);

server.listen(APP_PORT, () => {
  console.log(`♠♠ Server running on the port ${APP_PORT} ♠♠`);
});
