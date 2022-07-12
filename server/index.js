const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("hello from V1!"));

app.get("/ping", (req, res) => {
  console.log("pong");
  res.send({ message: "pong" });
});
app.listen(8080, () => {
  console.log("server started v2");
});
