let currentPlayer = "x";
const cells = document.querySelectorAll(".cell");
let arr = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];
const board = document.querySelector(".board");
const rematch = document.getElementById("restart");
const message = document.getElementById("message");
const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

board.addEventListener("click", (e) => {
  const targets = e.target.id;
  if (arr[targets] === "x" || arr[targets] === "o")
    message.innerHTML = "Please choose different box";
  else {
    e.target.innerHTML = currentPlayer.toUpperCase();

    arr[targets] = currentPlayer;
    CheckWinner(arr, currentPlayer);
    currentPlayer = currentPlayer === "x" ? "o" : "x";
  }
});

rematch.addEventListener("click", () => {
  console.log("restart");
  for (let i = 0; i < 9; i++) {
    document.getElementById(`${i}`).innerHTML = "";
  }
  currentPlayer = "x";
  arr = ["a", "a", "a", "a", "a", "a", "a", "a", "a"];
  message.innerHTML = "  ";
});

function CheckWinner(arr, currentPlayer) {
  for (const key of winningCondition) {
    const a = key[0];
    const b = key[1];
    const c = key[2];
    if (
      arr[a] === currentPlayer &&
      arr[b] === currentPlayer &&
      arr[c] === currentPlayer
    ) {
      message.innerHTML = `Congratulations! 🎉 The game is over, and ${currentPlayer.toUpperCase()} Player emerges victorious! 🏆 Ready for a rematch?`;
    } else if (!arr.includes("a")) {
      message.innerHTML = w` The game is over, and its a tie! 🏆 Ready for a rematch?`;
    }
  }
}
