let marksWight, markHeight, markBMI, johnWight, johnHeight, johnBMI;

//test 1
marksWight = 78;
markHeight = 1.69;
markBMI = marksWight / markHeight ** 2;
johnWight = 92;
johnHeight = 1.95;
johnBMI = johnWight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`mark's BMI (${markBMI}) is higher than john's (${johnBMI})`);
} else {
  console.log(`john's (${johnBMI}) is higher than mark's BMI (${markBMI})`);
}

//test 2
marksWight = 95;
markHeight = 1.88;
markBMI = marksWight / markHeight ** 2;
johnWight = 85;
johnHeight = 1.76;
johnBMI = johnWight / johnHeight ** 2;

if (markBMI > johnBMI) {
  console.log(`mark's BMI (${markBMI}) is higher than john's (${johnBMI})`);
} else {
  console.log(`john's (${johnBMI}) is higher than mark's BMI (${markBMI})`);
}
