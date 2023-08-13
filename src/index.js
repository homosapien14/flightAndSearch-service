require("dotenv").config();
const express = require("express");

const setupAndStartServer = () => {
  const app = express();

  app.listen(process.env.PORT, () => {
    console.log("listening on port ", process.env.PORT);
  });
};

setupAndStartServer();
