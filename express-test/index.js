const express = require("express");

const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/hello", (req, res) => {
  res.json({ name: "mehdi" });
});

app.get("/ejs", (req, res) => {
  let name = req.query.name;
  res.render("index", { name });
});

app.listen(3000, () => console.log("listening on port 3000"));
