"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreBoard = document.querySelector(".label-score span");
let score = 20;

console.log(secretNumber);

scoreBoard.textContent = score;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "No Number! Please type a number between 1-20.";
  } else if (guess === secretNumber) {
    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    document.querySelector(".message").textContent =
      "You have guess the correct number!";
  } else if (guess < secretNumber) {
    score--;

    document.querySelector(".message").textContent =
      "Your number is lower than the secret number, try again.";
  } else if (guess > secretNumber) {
    score--;

    document.querySelector(".message").textContent =
      "Your number is higher than the secret number, try again.";
  }

  scoreBoard.textContent = score;
  checkScore(score);
});

function checkScore(score) {
  if (score < 1) {
    scoreBoard.textContent = 0;

    document.querySelector("body").style.backgroundColor = "red";

    document.querySelector(".message").textContent =
      "You lose the game. Try again!";
  }
}
