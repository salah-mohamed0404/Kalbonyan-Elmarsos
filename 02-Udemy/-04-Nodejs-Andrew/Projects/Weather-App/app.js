const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=7db02b1df2ad734bf5df11961b5b4f8c&query=37.8267,-122.4233";

request({ url, json: true }, function (error, response) {
  console.log(
    `It is currently ${response.body.current.temperature} degrees out, There is ${response.body.current.feelslike} chance of rain.`
  );
});
