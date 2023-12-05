const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("<h1>This is server 2</h1>");
});

app.listen(4000, () => {
  console.log(`Server is running at port 4000`);
});
