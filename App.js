const express = require("express");
const app = express();
const cors = require("cors");
const fs = require("fs");
require("dotenv").config({ path: "./config.env" });

app.use(cors());
app.use(express.json());

// Adding routes at runtime
fs.readdirSync(`${__dirname}/modules`).forEach(function (file) {
  app.use(`/api/${file}`, require(`./modules/${file}/routing${file}`));
});

module.exports = app;