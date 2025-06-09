const moodColors = {
  happy: ["#FFD700", "#FF69B4", "#FFB347", "#FFFF66", "#FFA07A"],
  calm: ["#A2D2FF", "#CDB4DB", "#B5EAD7", "#D0F4DE", "#E0BBE4"],
  angry: ["#FF0000", "#8B0000", "#FF4500", "#FF6347", "#B22222"],
  sad: ["#4B0082", "#708090", "#2F4F4F", "#6A5ACD", "#1E90FF"],
};

const moodSelect = document.getElementById("mood-select");
const generateBtn = document.getElementById("generate");
const paletteDiv = document.getElementById("palette");

generateBtn.addEventListener("click", () => {
  const mood = moodSelect.value;
  const colors = moodColors[mood];
  paletteDiv.innerHTML = ""; // Clear existing palette

  colors.forEach((color) => {
    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;
    box.title = color;
    box.onclick = () => {
      navigator.clipboard.writeText(color);
      alert(`Copied ${color} to clipboard!`);
    };
    paletteDiv.appendChild(box);
  });
});
