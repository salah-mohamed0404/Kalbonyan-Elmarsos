const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=7db02b1df2ad734bf5df11961b5b4f8c&query=33,25&units=f`;

const request = http.request(url, function (response) {
  let data = "";
  response.on("data", function (chunk) {
    data += chunk.toString();
  });

  response.on("end", function () {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (err) => console.log("Ann error", err));

request.end();
