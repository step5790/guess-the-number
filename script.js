"use strict";

const scoreBoard = document.querySelector(".label-score span");
let score = 20;
let highScore = 0;
let secretNumber = randumNumber();
console.log(secretNumber);

scoreBoard.textContent = score;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".again").addEventListener("click", resetGame);

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    displayMessage("No Number! Please type a number between 1-20.");
  } else if (guess === secretNumber) {
    checkHighScore(score);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    displayMessage("You have guess the correct number!");
    document.querySelector("span.highscore").textContent = highScore;
  } else if (guess !== secretNumber) {
    displayMessage("You have guess the correct number!");

    // document.querySelector(".message").textContent =
    //   guess < secretNumber ? "Number too low" : "Number too high";

    displayMessage(guess < secretNumber ? "Number too low" : "Number too high");

    score--;
  }

  //   } else if (guess < secretNumber) {
  //     score--;
  //     document.querySelector(".message").textContent =
  //       "Your number is lower than the secret number, try again.";
  //   } else if (guess > secretNumber) {
  //     score--;
  //     document.querySelector(".message").textContent =
  //       "Your number is higher than the secret number, try again.";
  //   }

  checkScore(score);

  scoreBoard.textContent = checkScore(score);
});

// *********** functions ************

function randumNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

function checkScore(score) {
  if (score < 1) {
    document.querySelector("body").style.backgroundColor = "red";
    displayMessage("You lose the game. Try again!");
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
  secretNumber = randumNumber();
  console.log(secretNumber);
  score = 20;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  document.querySelector(".label-score span").textContent = score;
}
