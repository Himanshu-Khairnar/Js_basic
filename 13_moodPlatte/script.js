const moodColors = {
  happy: ["#FFD700", "#FF69B4", "#FFB347", "#FF6347"],
  calm: ["#ADD8E6", "#B0E0E6", "#AFEEEE", "#E0FFFF"],
  angry: ["#FF0000", "#8B0000", "#DC143C", "#B22222"],
  sad: ["#4682B4", "#708090", "#778899", "#6A5ACD"],
};

const generateBtn = document.getElementById("generate");
const paletteContainer = document.getElementById("palette");
const moodSelect = document.getElementById("mood-select");

generateBtn.addEventListener("click", () => {
  const mood = moodSelect.value;
  const colors = moodColors[mood];

  paletteContainer.innerHTML = "";

  colors.forEach((color) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.title = color;
    paletteContainer.appendChild(box);
  });
});
