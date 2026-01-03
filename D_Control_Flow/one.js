// if-else
const isUserloggedIn = true
if(isUserloggedIn){ // If this 'if' statement is true then it will get execute
    console.log("Logged In");
}
else{   // If the 'if' statement does not hold true then 'else' gets execute
    console.log("Not Logged In");
}

// Comparisions --> <, >, <=, >=, ==, !=, ===, !==

const score = 200
if(score > 100){
    // var power = "fly" [If var was use then the scope of the variable becomes Global and can beused anywhere in the code]
    let power = "fly"
    console.log(`User Power : ${power}`); // ----> Output : User Power : fly
}

const balance = 1000
if (balance > 500) console.log("test"); // ----> Implicit if statement


// switch
const month = 12
switch (month) {
    case 12: 
        console.log("Dec");
        break;
    case 1: 
        console.log("Jan");
        break;
    case 2: 
        console.log("Feb");
        break;
    default:
        break;
}