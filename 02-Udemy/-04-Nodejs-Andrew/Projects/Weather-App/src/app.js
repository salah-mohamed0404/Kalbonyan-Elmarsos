const path = require("path");
const express = require("express");
const hbs = require("hbs");

const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const app = express();
const port = process.env.PORT || 3000;

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

app.get("/weather", function (req, res) {
  const address = req.query.address;

  if (!address) return res.send({ error: "Error, Address is required" });

  geocode(address, function (error, { lat, long, location } = {}) {
    if (error) return res.send({ error });

    forecast(lat, long, (error, forecastData) => {
      if (error) return res.send({ error });

      res.send({
        forecast: forecastData,
        location,
        address,
      });
    });
  });
});

app.get("/products", function (req, res) {
  if (!req.query.search)
    return res.send({ error: "You must provide a search term" });
  req.query.search;
  res.send({
    products: [],
  });
});

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

app.listen(port, () => console.log(`server is up on port ${port}`));
