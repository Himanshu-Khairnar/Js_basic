const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");
  const guide = document.querySelector("#guide");

  if (height === "" || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height `;
    results.style.color = "red";
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight `;
    results.style.color = "red";
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);
    let guideContent;
    let color;
    if (res < 18.6) {
      guideContent = "UnderWeight";
      color="browm"
    } else if (res > 18.6 && res < 24.9) {
      guideContent = "Normal Range";
      color="green"
    } else {
      guideContent = "OverWeight";
      color="red"
    }
    results.innerHTML = `<span>Your BMI is ${res}</span>`;
    guide.innerHTML = `<span>${guideContent} <span>`;
    console.log(color);
    
    results.style.color = color;
    guide.style.color = color;
  }
});
