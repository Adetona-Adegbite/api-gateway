const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is server 1</h1>");
});

app.listen(6000, () => {
  console.log(`Server is running at port 6000`);
});
