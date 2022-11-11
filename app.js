const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendFile("./views/home.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./views/contact.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./views/about.html", { root: __dirname });
});

app.use((req, res) => {
  res.status(404).sendFile("./views/404.html", { root: __dirname });
});

app.listen(3000, () => {
  console.log("Listening to port 3000");
});
