const textToCheckElement = document.getElementById("text-to-check");
const originalText = textToCheckElement.innerText;
const textarea = document.getElementById("text-input");
const time = document.querySelector(".time");

let remainingTime = 60;
let gameremains = true;
let correctWord = "";
let incorrectWord = "";
let timerStarted = false; // Prevent multiple timers
 let timer;
textarea.addEventListener("input", () => {
  if (gameremains) {
    let usertext = textarea.value;
    startGame(usertext);

    if (!timerStarted) {
      startTime();
      timerStarted = true;
    }
  } else {
    textarea.setAttribute("disabled", "true");
  }
});

function startTime() {
  findWpm();
  timer =  setInterval(() => {
    remainingTime--;
    time.innerHTML = `Time: ${remainingTime}s`;

    if (remainingTime <= 0) {
      gameremains = false;
      clearInterval(timer);
      textarea.setAttribute("disabled", "true"); // Disable textarea when time is up
      // Calculate WPM & accuracy
    }
  }, 1000);
}

function startGame(usertext) {
  let displayText = "";
  correctWord = ""; // Reset correct words
  incorrectWord = ""; // Reset incorrect words

  for (let i = 0; i < originalText.length; i++) {
    if (i < usertext.length) {
      if (usertext[i] === originalText[i]) {
        displayText += `<span class="correct">${originalText[i]}</span>`;
        correctWord += originalText[i];
      } else {
        displayText += `<span class="incorrect">${originalText[i]}</span>`;
        incorrectWord += originalText[i];
      }
    } else if (i === usertext.length) {
      displayText += `<span class="current">${originalText[i]}</span>`;
    } else {
      displayText += originalText[i];
    }
  }

  if (usertext.length > originalText.length) {
    displayText += `<span class="incorrect">${usertext.substring(
      originalText.length
    )}</span>`;
    incorrectWord += usertext.substring(originalText.length);
  }

  textToCheckElement.innerHTML = displayText;
}

// ✅ Corrected WPM Calculation
function findWpm() {
  let totalTyped = correctWord.length + incorrectWord.length;
  let accuracy = totalTyped > 0 ? (correctWord.length / totalTyped) * 100 : 0;
  let wpm = totalTyped / 5 / (5 / 60); // Assuming 5 characters per word

  document.getElementById("wmp").innerHTML = `WPM: ${wpm.toFixed(2)}`;
  document.getElementById("accuracy").innerHTML = `Accuracy: ${accuracy.toFixed(
    2
  )}%`;
}

document.getElementById("reset").addEventListener("click", (e) => {
  remainingTime = 60;
  gameremains = true;
  correctWord = "";
  incorrectWord = "";
  timerStarted = false;
  correctWord = "";
  incorrectWord = "";
  textarea.removeAttribute("disabled")
  time.innerHTML="Time :60s"
  clearInterval(timer)
});
