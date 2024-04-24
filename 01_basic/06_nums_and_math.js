const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(1));

const otherNumber = 123.5685;
console.log(otherNumber.toPrecision(3)); // be careful try input 23.5685 and 1123.5685

const hundreds = 1000000;
console.log(hundreds.toLocaleString("en-IN")); // indian standard

//+++++++++++ Maths ++++++++++//

console.log(Math); //try writing in chrome console
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // if decimal value is just greater than 0 i.e 4.1 , 4.2 it rond of to 5
console.log(Math.floor(4.2));
console.log(Math.min(4, 3, 2, 1));
console.log(Math.max(4, 3, 2, 1));

console.log(Math.random()); // between 0 and 1
console.log(Math.random() * 10 + 1);
console.log(Math.floor(Math.random() * 10) + 1);

min = 10;
max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);
