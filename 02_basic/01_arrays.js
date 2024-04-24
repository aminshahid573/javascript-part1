// array

const { log } = require("console");

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["Muhammad S.A.W", "Omar R.A", "Abubakar R.A", "Ali R.A"];
const myArr2 = new Array(1, 2, 3);

console.log(myArr[0]);
console.log(myHeros);

// Array Methods
myArr.push(6);
myArr.push(7);
myArr.pop(); // remove last element
console.log(myArr);

myArr.unshift(9); // add vale at starting position
console.log(myArr);

myArr.shift(); // remove vale at starting position
console.log(myArr);

// Questions
console.log(myArr.includes(9));
console.log(myArr.indexOf(5));

const newArr = myArr.join(); // it converts iArray into string

console.log(myArr);
console.log(newArr);

// slice , splice
console.log("Original ", myArr);

const myn1 = myArr.slice(1, 3); // 3rd value not included

console.log("Slice ", myn1);
console.log("Original ", myArr);

const myn2 = myArr.splice(1, 3);
console.log("Splice ", myn2);
console.log("Original ", myArr);
