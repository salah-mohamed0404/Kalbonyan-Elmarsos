"use strict";

const mark = {
  fullname: "Mark Miller",
  weight: 78,
  height: 1.69,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};
const john = {
  fullname: "John Smith",
  weight: 92,
  height: 1.95,
  calcBMI: function () {
    this.BMI = this.weight / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

const higherBMI = (markBMI, johnBMI) =>
  markBMI > johnBMI
    ? console.log(
        `${mark.fullname}'s BMI (${mark.BMI}) is higher than${john.fullname}'s BMI (${john.BMI}`
      )
    : console.log(
        `${john.fullname}'s BMI (${john.BMI}) is higher than${mark.fullname}'s BMI (${mark.BMI}`
      );

higherBMI(mark.BMI, john.BMI);
