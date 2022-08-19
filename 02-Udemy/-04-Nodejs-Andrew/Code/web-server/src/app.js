const express = require("express");

const app = express();

app.get("", (req, res) => res.send("Hello express!"));

app.get("/help", (req, res) => res.send("Help page"));

// Challenge to do two more routes
app.get("/about", (req, res) => res.send("About page"));

app.get("/weather", (req, res) => res.send("Weather page"));

app.listen(3000, () => console.log("server is up on port 3000"));
