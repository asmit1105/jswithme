 // DATATYPE SUMMARY
 // PRIMITIVE DATA TYPES
 /*
 1.String
 2.Numbers
 3.BigINT
 4.Undefined
 5.Null
 6.Symbol
 7.Boolean*/ 

 const string = "I am string";
 const numo = 23;
 const bigNumo = 12345678901234567890n;
 let undef;
 const nul = null;
 let isLoggedIn = true;

 console.table([
  typeof string,
  typeof numo,
  typeof bigNumo,
  typeof undef,
  typeof nul,
  typeof isLoggedIn
]);

//Non-Primitive DataTypes
/* 
1. Arrays
2. Objects
3. Functions
*/

let arrHeroes = ["Spiderman,Batman,Me"]; // Array
console.log(arrHeroes);
console.log(typeof arrHeroes);


let student = {
    name: "Asmit",
    age: 20,
    isActive: true
}; // Object
console.log(student);
console.log(typeof student);



function add(a,b) {
    return a + b;
}
console.log(add(2,3)); // function returns 5
console.log(typeof add);


/* Points to takeaway
 Null when checked with typeof returns object because when JS was invented objects had a type tag of 0,
null was represented internally as all zeros (000). Not fixed because it would break many existing websites.
 Array when checked with typeof returns object, as they are special type of objects.
*/

