const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

geocode("cairo", function (error, data) {
  if (error) return console.log(error);

  forecast(data.lat, data.long, (error, forecastData) => {
    if (error) return console.log(error);

    console.log(data.location);
    console.log(forecastData);
  });
});
