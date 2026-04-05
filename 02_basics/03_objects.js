const mySym = Symbol("key1");

const JsUser = {
    name: "Asmit",
    age: 18,
    mySym: "0303",
    email: "asmit@google.com",
    location: "New Delhi",
    
}

console.log(JsUser.age);
JsUser.email = "asmit@meta.com"; // Here we modified user's email
console.log(JsUser.email);

// To lock the user details

Object.freeze(JsUser);

JsUser.email = "NaN";
console.log(JsUser.email); // Not Changed

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this is current object
}

// Symbols



console.log(typeof JsUser.mySym); // string
console.log(JsUser[typeof "mySym"]); // now its symbol (unique)