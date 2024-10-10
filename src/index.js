const bodyParser = require("body-parser");
const express = require("express");

const { PORT } = require("./config/serverConfig.js");
const apiRoutes = require("./routes/index.js");

const setupAndServerStarted = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/api", apiRoutes);
  app.listen(PORT, () => {
    console.log(`Server started at: ${PORT}`);
  });
};

setupAndServerStarted();
