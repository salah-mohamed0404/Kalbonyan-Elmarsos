// setTimeout(() => console.log("Two sec are up"), 2000);

// const names = ["Andrew", "jen", "jess"];

// const shortNames = names.filter((name) => name.length <= 4);

// const geocode = function (address, callback) {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       langitude: 0,
//     };

//     callback(data);
//   }, 2000);
// };

// const data = geocode("cairo", (data) => console.log(data));

/////////////////////////////////////////
//Challenge
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = function (a, b, sum) {
//   setTimeout(() => {
//     sum(a + b);
//   }, 2000);
// };

// add(1, 4, (sum) => {
//   console.log(sum); // Should print: 5
// });

const doWorkCallback = function (callback) {
  setTimeout(() => {
    // callback("This is my error!");
    callback(undefined, [1, 4, 2, 6]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) return console.log(error);

  console.log(result);
});
