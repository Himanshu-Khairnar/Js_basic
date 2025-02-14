const user = {
  username: "Himanshu",
  price: 999,
  welcomeMessage: function () {
    console.log(`${this.username}, welcome ot our website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username="Himanshu Khairnar"
// user.welcomeMessage();

// console.log(this);

// function hello() {
//   const username = "Himanshu";
//   console.log(this.username);
// }
// hello();

// const name = function () {
//   let username = "himanshu";
//   console.log(this.username);
// };
// name();

// const name = () => {
//   let username = "himanshu";
//   console.log(this);
// };
// name();

// const addtwo = (num1, num2) => num1 + num2;
const addtwo = (num1, num2) => ({ name: "Himanshu" });

console.log(addtwo(1, 2));

const myArr = [2, 4, 5, 6];

myArr.forEach(()=> {});
