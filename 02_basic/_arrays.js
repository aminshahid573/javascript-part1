const marvel_heros = ["Loki", "iron man", "thor"];
const dc_heros = ["Flash", "Bat Man", "Superman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);

//prefered
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [8, 9, [9, 10]], 11];
const real_another_array = another_array.flat(Infinity); //it make single array
console.log(real_another_array);

//Array is ,from , of ;
console.log(Array.isArray("Shahid"));
console.log(Array.from("Shahid"));

console.log(Array.from({ name: "Shahid" })); // intresting it gives empty array , but why?

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
