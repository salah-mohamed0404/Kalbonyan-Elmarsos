const path = require("path");
const express = require("express");

const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");

app.set("view engine", "hbs");
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) =>
  res.render("index", {
    title: "Weather App",
    name: "Salah",
  })
);

app.get("/about", (req, res) =>
  res.render("about", {
    title: "About me",
    name: "Salah Mohamed",
  })
);

app.get("/weather", (req, res) =>
  res.send({
    forecast: "It's sunny day",
    location: "cairo",
  })
);

app.listen(3000, () => console.log("server is up on port 3000"));
