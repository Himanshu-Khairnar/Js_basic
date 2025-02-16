let randNum = Math.floor(Math.random() * 100) + 1;
console.log(randNum);

const submit = document.querySelector("#subt");
const guessedNumber = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const LowOrHI = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevG = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(guessedNumber.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number below 100");
  } else {
    prevG.push(guess);
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess === randNum) {
    displayMessage("You guessed it right!");
    endGame();
  } else if (guess < randNum) {
    displayMessage("Number is too low");
  } else if (guess > randNum) {
    displayMessage("Your guess is too high");
  }

  if (numGuess === 11) {
    displayMessage(`Game Over! Random Number was ${randNum}`);
    endGame();
  }
}

function displayMessage(message) {
  LowOrHI.innerHTML = `<h2>${message}</h2>`;
}

function displayGuess(guess) {
  guessedNumber.value = "";
  guessSlot.innerHTML = prevG.join(", ");
  numGuess++;
  remaining.innerHTML = Math.max(0, 11 - numGuess);
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  if (newGameBtn) {
    newGameBtn.addEventListener("click", () => {
      randNum = Math.floor(Math.random() * 100) + 1;
      prevG = [];
      numGuess = 1;
      guessSlot.innerHTML = ``;
      remaining.innerHTML = `${11 - numGuess}`;
      guessedNumber.removeAttribute("disabled");
      startOver.removeChild(p);
      playGame = true;
    });
  }
}

function endGame() {
  guessedNumber.value = "";
  guessedNumber.setAttribute("disabled", "");

  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.append(p);
  playGame = false;
  newGame();
}
