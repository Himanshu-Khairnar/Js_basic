function SayMyName() {
  console.log("Himanshu");
}
// SayMyName()

// function addTwoNumbers(number1,number2) {
//     console.log(number1+number2);
// }
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}
const result = addTwoNumbers(3, 3);
// console.log(result);

function loginUserMessaage(username="John Doe") {
  if (!username) {
    console.log("Please enter a name");
    return;
  }

  return `${username} just logged in`;
}
console.log(loginUserMessaage());
