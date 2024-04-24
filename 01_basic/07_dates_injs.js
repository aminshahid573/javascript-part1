// Dates

let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());

console.log(typeof myDate);

// in js moth starts with 0
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString());

let anotherDate = new Date(2023, 0, 23, 5, 3);
console.log(anotherDate.toLocaleString());

let nextDate = new Date("01-14-2023");
console.log(nextDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now() / 1000)); // it gives seconds

let newDate = new Date();
console.log(newDate.getDay());

newDate.toLocaleString("default", {
  weekday: "long",
  timeZone: "Europe/Paris",
});

console.log(
  newDate.toLocaleString("default", {
    weekday: "long",
    timeZone: "Europe/Paris",
  })
);
