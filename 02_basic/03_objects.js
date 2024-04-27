// Define Singleton ,  Object literals

const { log } = require("console");

// Symbol datatype
const mySym = Symbol("key1");

const jsUser = {
  [mySym]: "myKey1", //this is the way to use symbol as key in object
  name: "Shahid",
  "full name": "Shahid Amin", //this value cannot acces by . operation , we have to use ["full name"]
  age: 17,
  location: "Dainiya",
  email: "abc@gmail.com",
  isLogedIn: false,
  lastLoginDays: ["Monday", "Saturday", "Sunday"],
};

console.log(jsUser.email);

console.log(jsUser["email"]);
console.log(jsUser["full name"]);

console.log(jsUser[mySym]);

//changing object value

jsUser.email = "amin@gmail.com";
console.log(jsUser["email"]);

// +------------------------------+
// Object.freeze(jsUser); // it freeze the object and not allow further change in  the object

// jsUser.email = "amin@microsoft.com";
//console.log(jsUser);

// +------------------------------+

// function in object

jsUser.greeting = function () {
  console.log("Hello JS User");
};

jsUser.greetingTwo = function () {
  console.log(`Hello JS User, ${this.name}`);
};

console.log(jsUser.greeting);
console.log(jsUser.greeting()); // give output and undefined

console.log(jsUser.greetingTwo());
