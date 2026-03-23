// STRINGS

let name = "Asmit";
let followers = 49500;

console.log(`My name is ${name} and I have ${followers} followers`);

// STRING FUNCTIONS

// Length
console.log(name.length) // 5

// charat
console.log(name.charAt(3)); // i

// at
console.log(name.at(-1)); // t

// charCodeAt

console.log(name.charCodeAt(3)); //UTF-16

//slice

let lang = "Javascript";
console.log(lang.slice(0,4)); // Java

// substring

console.log(lang.substring(1,5)); // avas

// upper/lowercase

let gameName = "asmit1105";
console.log(gameName.toUpperCase()); //ASMIT1105

// Combining - concat

console.log(name.concat(" ", gameName)); // Asmit asmit1105 (not a very good example tbh)

//Remove whitespace - trim

let pet = "    cat  ";
console.log(pet.trim()); //cat
console.log(pet);//   cat

// replace
console.log(pet.replace("cat", "dogs"));

//split

let text = "apple,banana,mango";
console.log(text.split(","));
console.log(text);






