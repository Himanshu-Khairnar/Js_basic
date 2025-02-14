var c = 400;
let a = 300;
if (true) {
  let a = 100;
  const b = 20;
  // console.log("Inner : "+a);
}

// console.log(a);
// console.log(b);
// console.log(c);

function one() {
  const username = "Himanshu";
  function two() {
    const website = "github";
    console.log(website);
  }
  //   console.log(website);

  console.log(username);
  two();
}
one();

if (true) {
  const username = "Himanshu";
  if (username === "Himanshu") {
    const website = " youtube";
    console.log(username + website);
  }
  // console.log(website);
}
// console.log(username);
addOne(1);

function addOne(num) {
  return num + 1;
}
addtwo(2);

const addtwo = function (num) {
  return num + 2;
};
