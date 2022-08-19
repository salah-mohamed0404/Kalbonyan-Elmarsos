const express = require("express");

const app = express();

app.get("", (req, res) => res.send("<h1>Weather</h1>"));

app.get("/help", (req, res) =>
  res.send([
    {
      name: "Salah",
      age: 18,
    },
  ])
);

// Challenge to do two more routes
app.get("/about", (req, res) => res.send("<h1>About page</h1>"));

app.get("/weather", (req, res) =>
  res.send({
    forecast: "It's sunny day",
    location: "cairo",
  })
);

app.listen(3000, () => console.log("server is up on port 3000"));
