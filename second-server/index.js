const express = require("express");
const axios = require("axios");

const app = express();

app.get("/ping", (req, res) => {
  axios
    .get("http://server-service:8080/ping")
    .then((res) => console.log(res.data));
  res.send({ message: "pinged" });
});

app.listen(4000, () => {
  console.log("second server startedn on port 4000");
});
