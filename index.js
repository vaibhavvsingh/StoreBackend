const express = require("express");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/posts", (req, res) => {
  res.send("Posts List");
});
app.get("/users", (req, res) => {
  res.send("Users List");
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
