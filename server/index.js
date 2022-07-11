const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("hello from V1!"));
app.listen(8080, () => {
  console.log("server started v2");
});
