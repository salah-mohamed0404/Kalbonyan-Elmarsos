const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const url =
// "http://api.weatherstack.com/current?access_key=7db02b1df2ad734bf5df11961b5b4f8c&query=37.8267,-122.4233&units=f";

// request({ url, json: true }, function (error, response) {
//   if (response?.body?.error) {
//     console.log("Unable to find location");
//   }
//   else if (!error) {
//     console.log(
//       `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out, There is ${response.body.current.feelslike} chance of rain.`
//     );
//   }  else {
//     console.log("Unable to connect to weather service!");
//   }
// });

// geocode("cairo", function (error, data) {
//   console.log(`Error ${error}`);
//   console.log(`Data ${data}`);
// });

//Challenge
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-25, 45, (error, data) => {
  console.log("Error", error);
  console.log("Data", data);
});
