"use strict";

const car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

car.prototype.break = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const bmw = new car("BMW", 120);
const mercedes = new car("mMercedes", 95);

bmw.accelerate();
bmw.break();
mercedes.accelerate();
mercedes.break();
