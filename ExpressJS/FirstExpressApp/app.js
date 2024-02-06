const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(
    '<a href="/contact">contact us</a> <br> <a href="/about">About Us</a>'
  );
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact us page</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about us page</h1>");
});

app.listen(3000, () => {
  console.log("server start on port 3000");
});
