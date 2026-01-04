// For loop :
const num = 10
for (let i = 0; i < num; i++) {
    console.log(i);
}

// Loop on array:
let myArray = ["flash", "batman", "superman"]
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(element);
}

// break and continue
for (let i = 0; i <= num; i++) {
    if(i == 5){
        console.log(`The Best Value is ${i}`);
        break;  // ----> Break terminates the loop
    }
    if(i == 3) continue // Continue skips the particular iteration case
    console.log(i);
}