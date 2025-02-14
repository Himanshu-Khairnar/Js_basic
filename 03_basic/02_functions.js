function calCartPrice(...num1) {
  return num1;
}
// console.log(calCartPrice(2,2,3,4,5));

const user = {
  username: "himanshu",
  price: 111,
};

function handldeObj(anyObject) {
  console.log(
    `username is ${anyObject.username} and price is ${anyObject.price}`
  );
}
// handldeObj({username:"samy",price:"111"})

const newArray = [200, 400, 100, 500];

function returnSecondValue(getArray) {
  return getArray[1];
}
console.log(returnSecondValue(newArray));

