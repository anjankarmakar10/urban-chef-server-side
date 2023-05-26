const express = require("express");
const app = express();
const cors = require("cors");
const data = require("./data.json");

app.use(cors());

const port = 4000;

app.get("/", (req, res) => {
  res.send("welcome to urban chefs server!!!");
});

app.get("/chefs", (req, res) => {
  res.send(data);
});

app.get("/chefs/:id", (req, res) => {
  const id = req.params.id;
  const chef = data.find((item) => +item.id === +id) || {};
  res.send(chef);
});

app.listen(port, () => {
  console.log(`urban chef server runnging on port: ${port}`);
});
