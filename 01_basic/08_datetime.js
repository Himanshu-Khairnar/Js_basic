let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toISOString())

console.log(typeof myDate)
// let myCreatedDate = new Date(2005,11,18,18,36,0)
let myCreatedDate = new Date("02-13-2025")

console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getDate())

console.log(newDate.toLocaleString("default",{
 weekday:"long" 
}));
