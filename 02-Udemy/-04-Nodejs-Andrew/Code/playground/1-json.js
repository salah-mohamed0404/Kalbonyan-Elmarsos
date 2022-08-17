const fs = require("fs");

// const book = {
//   title: "Ego is the Enemy",
//   auther: "Ryan Holiday",
// };

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync("1-json.json", bookJSON);

// const dataBuffer = fs.readFileSync("1-json.json");
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data);

// Challenge
const data = JSON.parse(fs.readFileSync("1-json.json").toString());

data.name = "Salah";
data.age = "18";

fs.writeFileSync("1-json.json", JSON.stringify(data));
