const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT;
const host = process.env.HOST;

app.use(cors());
app.use(express.json());

const dbo = require("./db/conn");
 
app.listen(port,host, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});