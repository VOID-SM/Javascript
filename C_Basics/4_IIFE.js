// Immediately Invoked Function Expression (IIFE)

(function chai(){       // ----> Named IIFE
    console.log(`DB CONNECTED`);
})(); // ----> () first parenthesis where function is defined and () second to execute immediately and end this with ; semicolon

// IIFE is a function which execute immediately and it is used to prevent pollution from the global scope

//Arrow Function
(() => {  // ----> Unnamed IIFE
    console.log(`DB CONNECTED TWO`);
} )();

((name) => {
    console.log(`${name} is my name`);
})("Sagnik");