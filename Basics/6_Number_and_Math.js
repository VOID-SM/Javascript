/* +++++++++++++++++++++++++ Numbers +++++++++++++++++++++++++ */

const score = 400   // ----> Automatically assign it as number
console.log(score)  // ----> Output : 400

const balance = new Number(1000) //----> Assigning 1000 as a number
console.log(balance)             // ----> Output : [Number : 1000]

console.log(balance.toString())     // ----> String --> 1000 (all properties of string is applicable)
console.log(balance.toFixed(2))     // ----> 2 Decimal values and return string
console.log(balance.toPrecision(3)) // ----> Total 3 digits and returns a digit string 

const hundred = 1000000
console.log(hundred.toLocaleString())        // ----> 1,000,000 (US Standard number) and return string
console.log(hundred.toLocaleString('en-In')) // ----> 10,00,000 (Indian Standard number) and return string

const Number = 100; 
/* Number.MAX_VALUE Number.MIN_VALUE */ // ----> Gives maximum and minimum value

/* +++++++++++++++++++++++++ Math +++++++++++++++++++++++++ */

console.log(Math)            // ----> Object [Math]{}
console.log(Math.abs(-10))   // ----> Absolute value which is 10
console.log(Math.round(4.6)) // ----> Round of to nearest integer

/* We can also use Math.ceil(number) ----> to Rounding to Next Number
   We can also use Math.floor(number) ----> to Rounding to Previous Number */

console.log(Math.min(5, 6, 3, 10)) // ----> Minimum value 3
console.log(Math.max(5, 6, 3, 10)) // ----> Maximum value 10

console.log(Math.random()) // ----> Random value between 0 - 1


// We want numbers to be between 10 - 20
const max = 20
const min = 10
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // ----> Output between 10-20