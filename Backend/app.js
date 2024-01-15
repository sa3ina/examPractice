const express = require("express");
const app = express();
const port = 3000;
require("./config/db");
const router = require("./routers/Router");
var cors = require("cors");
app.use(express.json());
app.use(cors());
app.use("/", router);
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
