const express = require("express");
const { PORT } = require("./src/config/serverConfig");
require("dotenv").config();
const setupserver = async () => {
  const app = express();

  app.listen(PORT, () => {
    console.log(` server is running in port ${PORT}`);
  });
};

setupserver();
