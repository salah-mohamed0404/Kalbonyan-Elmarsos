"use strict";

// TEST DATA:
const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// My solution
// 1.
dogs.forEach(function (dog) {
  dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28);
});
console.log(dogs);

// 2.
const sarahDog = dogs.filter(dog => dog.owners.includes("Sarah"))[0];
console.log(sarahDog);

if (
  sarahDog.curFood > sarahDog.recommendedFood * 0.9 &&
  sarahDog.curFood < sarahDog.recommendedFood * 1.1
)
  console.log("sarah's dog eats okey");
else if (sarahDog.curFood > sarahDog.recommendedFood)
  console.log("sarah's dog eats too much");
else console.log("sarah's dog eats too little");

// 3.
const ownersEatTooMuch = dogs
  .filter(
    dog =>
      dog.curFood > dog.recommendedFood &&
      !(
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
      )
  )
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(
    dog =>
      dog.curFood < dog.recommendedFood &&
      !(
        dog.curFood > dog.recommendedFood * 0.9 &&
        dog.curFood < dog.recommendedFood * 1.1
      )
  )
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4.
console.log(
  `"${ownersEatTooMuch.join(
    " and "
  )}'s dogs eat too much!" and ${ownersEatTooLittle.join(
    " and "
  )}'s dogs eat too little!"`
);

// 5.
console.log(
  dogs.find(dog => dog.curFood === dog.recommendedFood) ? true : false
);
///////////////////
const isEatOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;
///////////////////
// 6.
console.log(dogs.find(isEatOkay) ? true : false);

// 7.
const dogsEatingOkay = dogs.filter(isEatOkay);
console.log(dogsEatingOkay);

// 8.
const dogsSorted = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(dogsSorted, dogs);
