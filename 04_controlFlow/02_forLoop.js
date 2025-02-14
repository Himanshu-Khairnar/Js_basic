//for loop

// for (let index = 0; index <= 10; index++) {
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${index} * ${j} = ${j * index}`);
//   }
// }

let myArray = ["flash", "SuperMan", "Batman"];

for (let i = 0; i < myArray.length; i++) {
  const element = myArray[i];
  //   console.log(element);
}

//break and continue

for (let i = 0; i <= 20; i++) {
  if (i === 5) {
    continue;
  }
  console.log(`Value of i is ${i}`);
}
