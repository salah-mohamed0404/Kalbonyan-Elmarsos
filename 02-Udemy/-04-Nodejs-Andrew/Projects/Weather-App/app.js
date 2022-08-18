const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=7db02b1df2ad734bf5df11961b5b4f8c&query=37.8267,-122.4233&units=f";

request({ url, json: true }, function (error, response) {
  if (!error) {
    console.log(
      `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out, There is ${response.body.current.feelslike} chance of rain.`
    );
  } else if (response.body.error) {
    console.log("Unable to find location");
  } else {
    console.log("Unable to connect to weather service!");
  }
});

// const geocodeURL =
//   "http://api.positionstack.com/v1/forward?access_key=1f890ce54fb793f478d3dcda4ed4a85a&query=1600%20Pennsylvania%20Ave%20NW,%20Washington%20DC&output=json&limit=1";

// request({ url: geocodeURL, json: true }, function (error, response) {
//   const lat = response.body.data[0].latitude;
//   const long = response.body.data[0].longitude;
//   console.log(lat, long);
// });
