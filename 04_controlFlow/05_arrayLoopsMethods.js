const arr1 = ["js", "py", "c", "java"];

// arr1.forEach((item) => {
//   console.log(item);
// });

const myNums = [1, 2, 4, 5, 6, 6, 7, 8];

// const values = myNums.filter((num) => num > 5);

// console.log(values);

const newNums = [];

myNums.forEach((element) => {
  if (element > 4) {
    newNums.push(element);
  }
});

// console.log(newNums);

const myNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newArray = myNumber.map((num) => num + 20);
// console.log(newArray);
const newArray = myNumber
  .map((num) => num * 10)
  .filter((num) => num % 2 === 0)
  .reduce((num1, num2) => num1 + num2,0);

console.log(newArray);
