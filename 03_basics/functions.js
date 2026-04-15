//Functions

function myName() {
    console.log("A")
    console.log("S")
    console.log("M")
    console.log("I")
    console.log("T")

}

myName();

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("asmit"))
// console.log(loginUserMessage("asmit"))

function addToCart(...num1) {
return num1;
}

console.log(addToCart(5,9,10,40));

const user = {
    name: "Asmit",
    price: 2100
}

function handleObjects(anyObject) {
    console.log(`User: ${anyObject.name} cart's bill is: ${anyObject.price}`);
    
}

handleObjects(user);

const Array = [20,200,40,29];

function handleArray(AnyArray) {
    console.log(AnyArray[1]);
    
}

handleArray(Array);