const request = require("request");

const geocode = function (address, callback) {
  const url = `http://api.positionstack.com/v1/forward?access_key=1f890ce54fb793f478d3dcda4ed4a85a&query=${encodeURIComponent(
    address
  )}&output=json&limit=1`;

  request({ url, json: true }, function (error, { body }) {
    if (error) {
      callback("Can't get the coods");
    } else if (body.data.length === 0) {
      callback("Invalid address");
    } else {
      callback(undefined, {
        lat: body.data[0].latitude,
        long: body.data[0].longitude,
        location: body.data[0].name,
      });
    }
  });
};

module.exports = geocode;
