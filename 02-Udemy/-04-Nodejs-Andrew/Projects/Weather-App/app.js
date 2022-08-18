const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

address &&
  geocode(address, function (error, { lat, long, location } = {}) {
    if (error) return console.log(error);

    forecast(lat, long, (error, forecastData) => {
      if (error) return console.log(error);

      console.log(location);
      console.log(forecastData);
    });
  });

!address && console.log("Please provide an address");
