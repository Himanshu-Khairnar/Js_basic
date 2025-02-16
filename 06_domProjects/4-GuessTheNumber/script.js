let randonNumber = Math.floor(Math.random() * 100 + 1);
console.log(randonNumber);

const inputData = document.querySelector("#guessField");
const submitButton = document.querySelector("#subt");
const previousGuess = document.querySelector(".guesses");
const remainingGuess = document.querySelector(".lastResult");
const message = document.querySelector(".lowOrHi");
const div = document.querySelector(".resultParas");
const p = document.createElement("p");

let playGame = true;
let remaining = 10;
let prvGuess = [];
if (playGame) {
  
  submitButton.addEventListener("click", (e) => {
    e.preventDefault()
    userData = parseInt(inputData.value);
     validateDate(userData);
  });
}

function validateDate(userData) {
  if (userData < 0 || userData > 100 || isNaN(userData)) {
    displayMessage("Please choose a number between 100");
  } else {
    checkGuess(userData);
  }
}

function checkGuess(userData) {
  if (remaining === 0) {
    displayMessage("You lost the game");
    endGame();
  }
  if (userData === randonNumber) {
    displayMessage("You won the game!");
    inputData.value = "";
    endGame();
  } else if (userData > randonNumber) {
    displayMessage("Please choose a lower number");
    remaining--;
    prvGuess = [...previousGuess, userData];
    inputData.value = "";
    previousGuess.innerHTML = prvGuess;
    remainingGuess.innerHTML = remaining;
  } else if (userData < randonNumber) {
    displayMessage("Please choose a higher number");
    remaining--;
    prvGuess.push(userData);
    inputData.value = "";
    console.log(prvGuess);
    previousGuess.innerHTML = prvGuess.join(", ");
    remainingGuess.innerHTML = `${remaining}`;
  }
}

function displayMessage(messageToDisplay) {
  message.innerHTML = messageToDisplay;
}

function endGame() {
  p.innerHTML = "<h2>Start new Game</h2>";
  inputData.value = "";
  inputData.setAttribute("disabled", "");
  div.appendChild(p);
  playGame = false;
  p.addEventListener("click", () => startGame());

}

function startGame() {
  inputData.removeAttribute("disabled")
  playGame = true
  previousGuess.innerHTML=""
  message.innerHTML=""
  remainingGuess.innerHTML = 10

  
}

//     <div id="wrapper">
//       <h1>Number guessing game</h1>
//     <p>Try and guess a random number between 1 and 100.</p>
//     <p>You have 10 attempts to guess the right number.</p>
//     </br>
//         <form class="form">
//             <label2 for="guessField" id="guess">Guess a number</label>
//             <input type="text" id="guessField" class="guessField">
//             <input type="submit" id="subt" value="Submit guess" class="guessSubmit">
//         </form>

//         <div class="resultParas">
//             <p >Previous Guesses: <span class="guesses"></span></p>
//             <p >Guesses Remaining: <span class="lastResult">10</span></p>
//             <p class="lowOrHi"></p>
