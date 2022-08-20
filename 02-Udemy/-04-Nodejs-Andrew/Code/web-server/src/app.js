const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templetes/views");
const partialsPath = path.join(__dirname, "../templetes/partials");

// Setup handelbars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory
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

app.get("/help", (req, res) =>
  res.render("help", {
    helpMessage: "Ask",
    title: "Help",
    name: "Salah",
  })
);

app.get("/weather", (req, res) =>
  res.send({
    forecast: "It's sunny day",
    location: "cairo",
  })
);

app.get("/help/*", (req, res) =>
  res.render("errorPage", {
    title: "Help",
    name: "Salah Mohamed",
    errorMessage: "Help article not found",
  })
);

app.get("*", (req, res) =>
  res.render("errorPage", {
    title: "404",
    name: "Salah Mohamed",
    errorMessage: "Page not found",
  })
);

app.listen(3000, () => console.log("server is up on port 3000"));
