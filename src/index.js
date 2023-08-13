const express = require("express");
const {PORT} = require('./config/serverConfig');


const setupAndStartServer = () => {
  const app = express();

  app.listen(PORT, () => {
    console.log("server is up on port ", PORT);
  });
};

setupAndStartServer();
