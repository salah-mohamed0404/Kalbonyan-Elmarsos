"use strict";

/*
BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]
*/

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: Javescript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),
};

// My solution

// Display the question and take the resault
poll.registerNewAnswer = function () {
  const answer = Number(
    prompt(`${this.question} \n ${this.options.join("\n")} \nWrite yours.`)
  );
  typeof answer === "number" && answer >= 0 && answer <= 3
    ? this.answers[answer]++
    : alert("Invaild input");

  this.displayResults();
  this.displayResults("string");
};

// Display answers
poll.displayResults = function (type = "array") {
  if (type === "array") console.log(this.answers);
  else if (type === "string")
    console.log(`Poll results are ${this.answers.join(", ")}`);
};

// attach the function
document
  .querySelector(".poll")
  .addEventListener("click", poll.registerNewAnswer.bind(poll));
