const bill = 275;
console.log(
  `The bill was ${bill}, the tip was${
    bill >= 50 && bill <= 300 ? bill * (15 / 100) : bill * (20 / 100)
  }, the total value ${
    bill >= 50 && bill <= 300
      ? bill + bill * (15 / 100)
      : bill + bill * (20 / 100)
  }`
);
