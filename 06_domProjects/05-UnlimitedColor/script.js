// gen rand col

const randomColor = function () {
  const hex = "01234556789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16);
    color += hex[randomIndex];
  }
  return color;
};

let changeBg;
document.querySelector("#start").addEventListener("click", () => {
  if (!changeBg) {
    changeBg = setInterval(() => {
      document.querySelector("body").style.backgroundColor = randomColor();
    }, 1000);
  }
});
document.querySelector("#stop").addEventListener("click", () => {
  clearInterval(changeBg);
  changeBg = null;
});
