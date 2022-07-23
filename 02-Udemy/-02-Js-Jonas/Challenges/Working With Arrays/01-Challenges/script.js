"use strict";

const checkDogs = function (jDogs, kDogs) {
  const jDogsEdit = jDogs.slice(1, -2);
  // console.log(jDogsEdit);
  const dogs = [...jDogsEdit, ...kDogs];

  dogs.forEach(function (age, i) {
    console.log(
      `Dog number ${i + 1} is ${
        age >= 3 ? "an adult" : "a puppy 🐶"
      }, and is ${age} years old`
    );
  });
};

let dogsJulia = [3, 5, 2, 12, 7];
let dogsKate = [4, 1, 15, 8, 3];
checkDogs(dogsJulia, dogsKate);

console.log("-------TEST 2--------");

dogsJulia = [9, 16, 6, 8, 3];
dogsKate = [10, 5, 6, 1, 4];
checkDogs(dogsJulia, dogsKate);
