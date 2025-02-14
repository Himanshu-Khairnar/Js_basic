//for of

const arr = [1, 2, 4, 5, 5];

for (const element of arr) {
  //   console.log(element);
}

const greeting = "Hello World";
for (const greet of greeting) {
  //   console.log(`Each char of greeting ${greet}`);
}

//maps

const map = new Map();
map.set("IN", "India");
map.set("Ca", "Canada");
map.set("US", "America");
// console.log(map);

for (const [key, value] of map) {
  //   console.log(`${key} and ${value}`);
}

const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};
// for (const [key, value] of myObj) {
//   console.log(`${key} and ${value}`);
// }

const lang = {
  js: "javascript",
  py: "python",
  c: "C",
};

for (const key in lang) {
  //   c onsole.log(lang[key]);
}

const arr1 = ["js", "py", "c", "java"];

for (const key in arr1) {
  //   console.log(arr1[key]);
}

for (const key in map) {
  //   console.log(key);
}

// arr1.forEach((item, index) => {
//   console.log(`${item} and ${index}`);
// });

function printMe(item) {
  console.log(item);
}

// arr1.forEach(printMe);
// arr1.forEach((item, index, arr) => console.log(item, index, arr));

const myCoding = [
  {
    languageName: "javascript",
    extension: "js",
  },
  {
    languageName: "java",
    extension: "java",
  },
  {
    languageName: "cPlusPlus",
    extension: "cpp",
  },
];

myCoding.forEach(({ extension, languageName }, index) => {
  console.log(extension, languageName);
});
