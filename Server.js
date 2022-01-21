const app = require("./App");
const port = process.env.PORT;
const host = process.env.HOST;
const dbo = require("./db/conn");

app.listen(port, host, () => {
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
  });
  console.log(`Server is running on port: ${port}`);
});
