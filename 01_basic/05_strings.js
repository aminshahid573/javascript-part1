const { log } = require("console");

const name = "shahid";
const repoCount = 50;

// console.log(name + repoCount + "Value"); //not recommended

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Free-Fire");

console.log(gameName[0]);
console.log(gameName.__proto__); // in terminal it show empt set but in conole it shows the proto

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf("i"));

const newString = gameName.substring(0, 4); // 4 index char not included but 0 included
console.log(newString);

const anotherString = gameName.slice(-8, 4);
console.log(anotherString);

const newStringOne = "    hitesh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://pseudowebs.netlify.com/contact%20us";
console.log(url.replace("%20", "-"));
console.log(url.includes("shahid"));
