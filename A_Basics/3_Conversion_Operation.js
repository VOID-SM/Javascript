// *********************** Conversions !! *********************

let score = "33abc" // ----> string

let valueinNumber = Number(score) // ----> converts to number
console.log(typeof valueinNumber) // ----> number
console.log(valueinNumber) // ----> NaN(Not a Number)
Boolean(score) // ----> true/false
String(score) // ----> string

// *********************** Operations !! *********************

let value = 3
let negVal = -value
console.log(negVal) // ----> -3

// console.log(a + b) ----> Add
// console.log(a - b) ----> Sub
// console.log(a * b) ----> Multiply
// console.log(a / b) ----> Divide
// console.log(a ** b) ----> Power a^b
// console.log(a % b) ----> Modulo

console.log(1 + "2") // ----> 12
console.log("1" + 2) // ----> 12
console.log("1" + 2 + 2) // ----> 122
console.log(1 + 2 + "2") // ----> 32

let val = 100
console.log(val++); // ----> 100
console.log(val);   // ----> 101