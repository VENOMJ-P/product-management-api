const bodyParser = require("body-parser");
const express = require("express");

const { PORT } = require("./config/serverConfig.js");

const setupAndServerStarted = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
  });
};

setupAndServerStarted();
