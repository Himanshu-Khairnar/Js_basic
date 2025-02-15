const btn = document.querySelectorAll(".button");
const body = document.querySelector("body");

btn.forEach((bn) => {
  console.log(bn);
  bn.addEventListener("click", (e) => {
    console.log(e);
    const bg_color = e.target.id
    document.body.style.backgroundColor=bg_color
    
  });
});
