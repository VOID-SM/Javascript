// Functions

function sayMyName(){
    console.log("S");
    console.log("A");
    console.log("G");
    console.log("N");
    console.log("I");
    console.log("K");
}

sayMyName  // ----> Reference
sayMyName() // ----> Execution

function addTwoNumbers(number1, number2){ // ---->(number1, number2) --> Parameters
    console.log(number1 + number2);
}
addTwoNumbers(3, 4) // ----> (3, 4) --> Arguments

// We can also write functions in a variable
const result = addTwoNumbers(4, 6)
console.log(result); // ----> This will give 10 and then undefined because the function is not returning something

function addThreeNumbers(number1, number2, number3){
    let ans = number1 + number2 + number3
    return ans; // ----> This returns a number 
}
const ans = addThreeNumbers(1, 4, 5)
console.log("Result:", ans);

function loginUserMessage(username){
    return `${username} just Logged In`
}
console.log(loginUserMessage("Sagnik")); // ----> Sagnik just Logged In
console.log(loginUserMessage("")); // ----> just Logged In
console.log(loginUserMessage()); // ----> undefined just Logged In

function loginUserMessage(username = "Saggy"){ // ----> We can give default value
    if(!username){                             // ----> If-Else statement
        console.log("Please Give a Username");
        return
    }
    return `${username} just Logged In`
}

// *********************** Functions Continued *************************
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 300, 400)); // ----> Only 200 as it has only 1 parameter

function calculateCartPrice(...num1){ // (..num1) ----> Rest/Spread Operator
    return num1
}
console.log(calculateCartPrice(200, 300, 400)); // ----> All will get printed in Array due to Rest Operator(...num1)

// Passing Object as Function parameter

const user = {
    username: "Sagnik",
    price: 199,
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} ans is price ${anyobject.price}`);
}
handleObject(user);

// Also we can write
handleObject({
    username: "Sagnik",
    price: 199,
});

