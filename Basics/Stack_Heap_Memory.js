// Primitive ----> Stack Memory (Copy of datatype is passed)
// Non-Primitive ----> Heap Memory (Direct Reference of datatype is passed)

let myName = "Sagnik"
let anotherName = myName
anotherName = "Maity"
console.log(myName); // ----> Sagnik
console.log(anotherName); // ----> Maity


let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "sagnik@google.com"
console.log(userOne.email); // ----> sagnik@google.com
console.log(userTwo.email); // ----> sagnik@google.com