//Maths
const score = 50; // Primitive Number (Normal)
console.log(score);
console.log(typeof score);

const ammos = new Number(78); // Number Object
console.log(ammos);
console.log(typeof ammos);

// +++++++++ toString +++++++++++++++

let age = 18;
console.log(typeof age.toString()); //changed to string

// +++++++++ toFixed (Rounds of to specific decimal places)

const pi = 3.14159;
console.log(pi.toFixed(2)); // 3.14

// toPrecision

const maxHealth = 99.9984
console.log(maxHealth.toPrecision(3)); //100

// Number System Conversion
const hundreds = 1000000;
console.log(hundreds); //1000000
console.log(hundreds.toLocaleString('en-US')); //1,000,000 (International Num System)
console.log(hundreds.toLocaleString('en-IN')); // 10,00,000 (Indian Number System)

/* --------------MATHS---------------- */

console.log(Math); //object
console.log(Math.abs(-4)); //Absolute value - converts negative to positive

let distance = Math.abs(10-15);
console.log(distance);

console.log(Math.PI);

let ratings = Math.round(4.7); //round off
console.log(ratings);

//if you have 21 pages and you have to show 5 products per pages. (How can you convert 4.2 to 5)?

let productsPerPage = Math.ceil(21/5);
console.log(`Products per page: ${productsPerPage}`); // used in amazon,netflix

// Floor

age = 18.9;
console.log(age);
console.log(Math.floor(age));

// min max

console.log(Math.min(4, 3, 6, 8)); //price comparison

console.log(Math.max(4, 3, 6, 8)); //highest score

// random (otp-generation,ai-simulation,pass-gen)

console.log(Math.random()); //Range 0 to 1

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);














