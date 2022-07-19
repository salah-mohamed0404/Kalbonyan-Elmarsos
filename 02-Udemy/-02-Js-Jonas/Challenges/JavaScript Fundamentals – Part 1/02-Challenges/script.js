///////////////////////////////////////
/////////// Challange 2 //////////////
/////////////////////////////////////
/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

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
