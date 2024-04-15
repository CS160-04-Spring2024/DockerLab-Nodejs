const os = require("os");
const express = require("express");

const app = express();
const port = 3005;

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index", {
    username: os.userInfo().username,
    hostname: os.hostname,
    type: os.type,
    release: os.release,
    platform: os.platform,
    date: new Date().toLocaleString()
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
