// const User = new Object()

const tinderUser = {};
tinderUser.id = "12";
tinderUser.name = "Himanshu";
tinderUser.isLogned = false;

console.log(tinderUser);

const regularUser = {
  email: "Himanshu",
  fullName: {
    userNameFullName: {
      firstName: "Himanshu",
      lastName: "Khairnar",
    },
  },
};

// console.log(regularUser.fullName?.userNameFullName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 5: "b" };

// const obj3 = Object.assign(obj1,obj2,obj4)

const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

const users = [
  { id: 1, name: "Himanshu" },
  { id: 2, name: "Himanshu2" },
  { id: 3, name: "Himanshu3" },
  { id: 4, name: "Himanshu4" },
];

// users.map((item, index) => {
//     console.log(`Hello Your id is ${item.id} and name is ${item.name}`);
// });
console.log(users[1].email);
console.log(tinderUser);
console.log(Object.values(tinderUser));
Object.entries(tinderUser).map((item, index) => {
    console.log(`Your index ${index} and value ${item[1]}`)
});

console.log(tinderUser.hasOwnProperty("name1"));
