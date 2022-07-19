///////////////////////////////////////
/////////// Challange 1 //////////////
/////////////////////////////////////
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

let marksWight, markHeight, johnWight, johnHeight, markHigherBMI;

(marksWight = 78), (markHeight = 1.69), (johnWight = 92), (johnHeight = 1.95);

markHigherBMI = marksWight / markHeight ** 2 > johnWight / johnHeight ** 2;
console.log(markHigherBMI);

(marksWight = 95), (markHeight = 1.88), (johnWight = 85), (johnHeight = 1.76);

markHigherBMI = marksWight / markHeight ** 2 > johnWight / johnHeight ** 2;
console.log(markHigherBMI);
