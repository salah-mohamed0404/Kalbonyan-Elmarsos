"use strict";

const calcTip = bill =>
  bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100);

const calcAve = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) sum += arr[i];
  return sum / arr.length;
};

const bills = [125, 555, 44];
const tips = [];

for (let i = 0; i < bills.length; i++) tips.push(calcTip(bills[i]));

const totals = [];
for (let i = 0; i < bills.length; i++) totals.push(bills[i] + tips[i]);

const average = calcAve(totals);

console.log(bills);
console.log(tips);
console.log(totals);
console.log(average);
