const marvel_heros = ["thor", "IronMan", "spiderman"];
const dc_heros = ["flash", "SuperMan", "Batman"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][[0]]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros)

// const all_new_heros = [...marvel_heros,...dc_heros]

// console.log(all_new_heros);

// const anotherArray = [1, 2, 4, 5, [2, 4, 5, [3, 5], 3,5, [1, 4]]];

// const real_another_array = anotherArray.flat(Infinity);

// console.log(real_another_array);

console.log(Array.isArray("Himanshu"));
console.log(Array.from("Himanshu"));
console.log(Array.from({name:"Himanshu"}));// imp

let score1 = 100
let score3 = 300
let score2 = 200

console.log(Array.of(score1,score2,score3));
