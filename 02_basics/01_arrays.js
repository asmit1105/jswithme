// Array - collection of multiple values in a single variable

//Literal way to create an array
const arr = [2,4,6,8,10]; // arrays start from index 0, means on 0 index the value is 2.

// console.log(arr);
// console.log(typeof arr); // datatype of array is an object

// Constructor method to create an array

let heroes = new Array("Batman" , "Spiderman" , "Superman", "Hulk");
// console.log(heroes);
// console.log(typeof heroes); // still an object

// Basic Array METHODS
/* 1. PUSH - it puts another value in the string at last*/ 

heroes.push("Dhurandar");
// console.log(heroes); // Output - [ 'Batman', 'Spiderman', 'Superman', 'Hulk', 'Dhurandar' ]

/*2.POP - removes value from the end */


heroes.pop(); //Needs no value inside as it only removes value from the end
// console.log(heroes); // Output - [ 'Batman', 'Spiderman', 'Superman', 'Hulk' ]

/* 3.Unshift - adds value at the beginning (not the very best method as it costs performance for an array with large values) */

heroes.unshift("Captain America");
// console.log(heroes); // Output - [ 'Captain America', 'Batman', 'Spiderman', 'Superman', 'Hulk' ]

/* 4.Shift - removes value from the beginning*/

heroes.shift() // No value needed
// console.log(heroes); // Output - [ 'Batman', 'Spiderman', 'Superman', 'Hulk' ]

// arr to string - in this methods heroes array stays an object but prodcuts array changes to string


const products = heroes.join(); // changed to string
console.log(typeof products); // string
console.log(products); // output - Batman,Spiderman,Superman,Hulk

// SLICE
 const origArr = [10,20,30,40,50,60]
// const newArr = origArr.slice(0,4); // end value won't be affected

// console.log(`Original: ${origArr}`);

// console.log(`Sliced: ${newArr}`);

const newArr = origArr.slice(-3); // negative will start from back

console.log(`Original: ${origArr}`);

console.log(`Sliced: ${newArr}`);

// SHALLOW COPY - doesn't affect original array

const copy = origArr.slice();
console.log(copy); 

/* SPLICE - affects original array */

const array = [0,1,2,3,4,5];
//const changedArr = array.splice(0,3); start from 0 and remove 3 values

// console.log(changedArr);
// console.log(array); // changed

const changedArr = array.splice(2,0,99) // start from 0










