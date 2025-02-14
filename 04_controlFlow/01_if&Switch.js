// if statement

if (true) {
}

const month = 1;

switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("Mar");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("June");
    break;

  default:
    console.log("no month avaliable");

    break;
}

//false val
//false, 0 ,neg num,BigInt 0n,"",null,undefined,nan

// true val
// "0",'false'," ",[],{},function(){}

const userEmail = [1, 2, 3];

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const emptObj = {};

if (Object.keys(emptObj).length === 0) {
  console.log("obj is empty");
}

// Nullish Coalescing Operator (??) null undefined

let val1;
val1 = null ?? 1;
console.log(val1);
