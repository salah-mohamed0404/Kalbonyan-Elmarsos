"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1,
  score = 20,
  highScore = -1;

// funcion change the text content to an element to make the code more cleaner
const changeContent = (className, text) =>
  (document.querySelector(className).textContent = text);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // Make sure that game stops
  if (score !== -1) {
    // Base case
    if (score <= 1) {
      changeContent(".message", "😑 You are such a loser");
      changeContent(".score", 0);
      score = -1;

      // When there no input
    } else if (!guess) {
      changeContent(".message", "⛔ No number");

      // When player wins
    } else if (guess === secretNumber) {
      changeContent(".message", "🎉Correct Number!");
      changeContent(".number", secretNumber);

      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";

      // Handling the high code
      if (score > highScore) {
        highScore = score;
        changeContent(".highscore", highScore);
      }

      score = -1;

      // When guess is too high
    } else if (guess > secretNumber) {
      changeContent(".message", "📈 Too high!");
      changeContent(".score", --score);

      // When guess is too low
    } else if (guess < secretNumber) {
      changeContent(".message", "📉 Too low!");
      changeContent(".score", --score);
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

// Reset the game
document.querySelector(".again").addEventListener("click", function () {
  (score = 20), (secretNumber = Math.trunc(Math.random() * 20) + 1);
  changeContent(".message", "Start guessing...");
  changeContent(".score", score);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  changeContent(".number", "?");
  document.querySelector(".guess").value = "";
});
