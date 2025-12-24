// Singleton ----> Only one unique object
Object.create // ----> Singleton

// Object Literals

// If we wantd to use the symbols in the objects then 
const mySurname = Symbol("key1")

const JsUser = {
    name: "Sagnik",
    age: "20",
    [mySurname]: "Maity", // ----> [mySurname] to use the symbol in the Object
    location: "Udaipur",
    email: "info.sagnik@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"],
}

// We can access the data 
console.log(JsUser.email)
console.log(JsUser["email"]); // ----> You have to pass the parameter as string (Here: "email")

// Object.freeze(JsUser) ----> Freezes/Locks the data of the Object

JsUser.greeting = function(){
    console.log("Hello JS User");
}
console.log(JsUser.greeting()); // ----> Js treats Functions as a variable

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}
console.log(JsUser.greetingTwo());
