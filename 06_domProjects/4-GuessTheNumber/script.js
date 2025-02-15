const randNum = Math.floor(Math.random() * 100 + 1);
console.log(randNum);
let remainingGuess;
const submit = document.querySelector("#subt")
const form = document.querySelector("form");
const guessedNumber = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const LowOrHI = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevG = [];
let numGuess = 1;

let playGame = true;

if(playGame)
{
    submit.addEventListener("click",(e)=>{
        e.preventDefault()
        const guess = parseInt(guessedNumber.value);
        validateGuess(guess);
        console.log(guess );
        
    })
}
function validateGuess(guess) {
    if(isNaN(guess))
    {
        alert("Please enter a valid number")
    }else if(guess<1){
        alert("Please enter a number greater than 1");
    }
    else if(guess>100){
        alert("Please enter a number below 100")
    }
}

function checkGuess(guess) {}

function displayMessage(message) {}

function displayGuess(guess) {}

function newGame(){}

function endGame(){}