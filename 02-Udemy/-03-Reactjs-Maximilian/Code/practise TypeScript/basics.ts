let age: number;
age = 12;
// age = "12"; // Error

let userName: string;
userName = "Salah";
// userName = true // Error

let isInstructor: boolean;
isInstructor = true;
// isInstructor = 1; // Error

// More complex
let hobbies: string[];
hobbies = ["Sports", "Cooking"];
// hobbies = ["Sports", "Cooking", 5]; // Error

type Person = {
  name: string;
  age: number;
};

let person: Person;
person = {
  name: "Max",
  age: 32,
};
// person = {
//   isEmployee: true,
// }; // Error must be the same structure with same types

let people: Person[];

// Type inference
let course = "React";
// course = 100; // Error because it save its type to string

let _course: string | number = "React";
_course = 100; // Not an error because varaible has to possible types nummer and string

// Functions & Types
function add2(a: number, b: number) {
  return a + b;
}

function printOut(value: any) {
  console.log(value);
}

function insertAtBegining<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1);
const stringArray = insertAtBegining(["a", "b"], "c");

// updatedArray[0].split("") //Error
stringArray[0].split(""); // this works
