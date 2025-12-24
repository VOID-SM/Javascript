// Arrays Basics

const Arr = [0, 1, 2, 3, 4, 5] // ----> Basic Array declaration
console.log(Arr) // ----> [0, 1, 2, 3, 4, 5]
const Heros = ["Spiderman", "Batman", "Hulk"]
const Arr2 = new Array(1,2,3,4) // ----> Another way to declare array

// Array Methods

Arr.push(6)       // ----> [0, 1, 2, 3, 4, 5, 6] (6 Gets added)
Arr.pop()         // ----> Removes last element which is 6
Arr.unshift(10)   // ----> Adds 10 to the first place [10, 0, 1, 2, 3, 4, 5]
Arr.shift()       // ----> Removes the 1st element

Arr2.includes(9)  // ----> Returns true/false
Arr2.indexOf(9)   // ----> Returns number which is the index of 9 (As it is not present answer is -1)

const newArr = Arr.join() // ----> Makes the array [0, 1, 2, 3, 4] as string (0, 1, 2, 3, 4)

const myn1 = Arr2.slice(0, 2)
console.log(myn1); // ----> [0, 1] (Do not include last element of range and do not change the original array)

const myn2 = Arr2.splice(0, 2)
console.log(myn2); // ----> [0, 1, 2] (Includes the last element of the range but also changes the original array)
console.log(Arr2); // ----> [3, 4] (Array gets trimmed down)


// Arrays Advanced

const marvel_Heros = ["Spiderman", "Ironman", "Thor"]
const DC_Heros = ["Batman", "Superman", "Flash"]

marvel_Heros.push(DC_Heros)
console.log(marvel_Heros); // ----> Output : ["Spiderman", "Ironman", "Thor", ["Batman", "Superman", "Flash"]]
// Output comes like the DC_Heros array is merged into Marve_Heros array

const AllHeros = marvel_Heros.concat(DC_Heros) // ----> Concat returns a new array
console.log(AllHeros); // ----> ["Spiderman", "Ironman", "Thor", "Batman", "Superman", "Flash"]

const all_new_heros = [...marvel_Heros, ...DC_Heros] // ----> Spread Operator same as Concat 
console.log(all_new_heros); // ----> ["Spiderman", "Ironman", "Thor", "Batman", "Superman", "Flash"]

const another_Arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const newA = another_Arr.flat(Infinity) // ----> Flats out all the recursed elements into single element
console.log(newA); // ----> [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

Array.isArray("Sagnik") // ----> False
Array.from("Sagnik") // ----> ['S', 'a', 'g', 'n', 'i', 'k',]
Array.from({name : "Sagnik"}) // ----> Empty Array []

let score1 = 100, score2 = 200, score3 = 300
Array.of(score1, score2, score3) // ----> [100, 200, 300]