// While Loop :
let i = 0
while (i < 5) { // (i < 5) is the condition that tells that the loop will run till i < 5 
    console.log(`Index : ${i}`);
    i++; // ----> This will increse the i and prevent infinite loop
}

// While Loop on an Array :
let myArray = ["Messi", "Suarez", "Neymar"]
let j = 0
while (j < myArray.length) {
    console.log(`MSN Trio : ${myArray[j]}`);
    j++
}

// do-while Loop:
let score = 6
do { // ----> This will run atleast once irrespective of the condition in the while loop
    console.log(`Score :${score}`);
    score++
} while (score < 10);