"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const scoreBoard = document.querySelector(".label-score span");

let score = 20;
let highScore = 0;

console.log("secret:" + secretNumber);

scoreBoard.textContent = score;

document.querySelector(".again").addEventListener("click", resetGame);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    document.querySelector(".message").textContent =
      "No Number! Please type a number between 1-20.";
  } else if (guess === secretNumber) {
    checkHighScore(score);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector(".message").textContent =
      "You have guess the correct number!";
    document.querySelector("span.highscore").textContent = highScore;
  } else if (guess < secretNumber) {
    score--;
    document.querySelector(".message").textContent =
      "Your number is lower than the secret number, try again.";
  } else if (guess > secretNumber) {
    score--;
    document.querySelector(".message").textContent =
      "Your number is higher than the secret number, try again.";
  }

  checkScore(score);
  console.log(checkScore(score));

  scoreBoard.textContent = checkScore(score);
});

function checkScore(score) {
  if (score < 1) {
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".message").textContent =
      "You lose the game. Try again!";
    score = 0;
  }
  return score;
}

function checkHighScore(score) {
  if (score > highScore) {
    highScore = score;
    console.log("check " + highScore);
    return highScore;
  }
}

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".label-score span").textContent = score;
}
