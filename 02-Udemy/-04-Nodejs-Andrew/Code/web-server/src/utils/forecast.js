const request = require("request");

const forecast = function (lat, long, callback) {
  const url = `http://api.weatherstack.com/current?access_key=7db02b1df2ad734bf5df11961b5b4f8c&query=${lat},${long}&units=f`;

  request({ url, json: true }, function (error, { body }) {
    if (error) {
      console.log("Unable to connect to weather service!");
    } else if (body.error) {
      console.log("Unable to find location");
    } else {
      callback(
        undefined,
        `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees out, There is ${body.current.feelslike} chance of rain.`
      );
    }
  });
};

module.exports = forecast;
