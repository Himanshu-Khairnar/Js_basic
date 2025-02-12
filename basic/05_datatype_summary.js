// Primitive

// 7 types:
//  String
// Number
// Boolean
// null
// undefined
// Symbol
// BigInt


const score = 100;
const scoreValue = 1000.33;

const isLogedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 4561152046886684725n;

console.log(typeof bigNumber);

// Reference (non-primitive)
// Array
// Objects
// Functions

const heros =["super Man" ,"Bat Man","spiderman"]

let myObj = {
    name :"hitest",
    age:22,
}

const myFunction=function(){
    console.log("Hello World")   
}

myFunction()

console.log(typeof myFunction)
console.log(typeof heros)
console.log(typeof myObj)

// ++++++++++++++++++++++++++++++

// Memory => Stack(Primitive), Heap(Non-Primitive)

let myName = "Himanshu Khairnar"


let anotherName = myName

anotherName = "Soham"
console.log(anotherName)

const user = {
  email: "himanshu@gmail.com",
  name: "himanshu Khairnar",
};
const user2 = user

user2.email = "himanshu@google.com"

console.log(user)
console.log(user2)

