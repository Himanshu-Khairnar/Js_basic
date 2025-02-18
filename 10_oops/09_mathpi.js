// console.log(Object.getOwnPropertyDescriptor(Math, "PI"));

// console.log(Math.PI);

const chai = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,
  orderChai: function () {
    console.log("ok");
  },
};
console.log(chai);

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
//   configurable: false,
// });

console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (const [key, value] of Object.entries(chai)) {
  if (typeof value !== "function") console.log(`${key}: ${value}`);
}

for (const key in chai) {
  console.log(`keys ${chai[key]}`);
}
