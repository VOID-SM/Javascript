const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.map((num) => num + 10) ----> Increases every element by 10
// console.log(newNums); // ----> [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const newNums = myNums
                    .map((num) => num*10)       // ----> Multiplies 10 and sent to bottom 
                    .map((num) => num + 1)      // ----> Add 1 to the result
                    .filter((num => num >= 40)) // ----> Filters the number greater than 40
console.log(newNums); // ----> [41, 51, 61, 71, 81, 91, 101]

// Reduce :
const arr = [1, 2, 3]
const myTotal = arr.reduce(function(acc, currval) {
    return acc + currval
}, 0) // ----> Here this 0 is the initial value of the acc(Accumalator)

// Arrow function :
const total = arr.reduce((acc, curr) => acc + curr, 0)
console.log(total); // ----> 6