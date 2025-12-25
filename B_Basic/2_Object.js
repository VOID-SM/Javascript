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

// ***************************** Objects More **************************

const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

const regularuser = {
    email: "some@gmail.com",
    fullname: {
        userFullName: {            // ----> Nesting of Objects
            firstName: "Sagnik",
            lastName: "Maity"
        }
    }
}

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = Object.assign(obj1, obj2) // ----> One way to concat the Objects
// const obj3 = Object.assign({}, obj1, obj2) // ----> Better way to Concat
const obj3 = {...obj1, ...obj2} // ----> Spread method

console.log(obj3);
console.log();


const users = [ // ----> Objects comes from Databases they come in the form of Arrays of object
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
    {
        id: 1,
        email: "s@gmail.com",
    },
]

users[1].email // ----> Accessing first User Object

console.log(Object.keys(tinderUser)); // ----> Gives array of all the datatypes defined inside the Object (Here : ['id', 'name', 'isLoggedIn'])
console.log(Object.values(tinderUser)); // ----> Gives array of all the values stored in the datatypes (Here : ['123abc', 'Sammy', 'false'])
console.log(Object.values(tinderUser)); // ----> Gives array of individual datatype + value together

tinderUser.hasOwnProperty('isLoggedIn') // ----> True --> If it exists or False --> If do not exist in the object

// ************************************** Object De-Structure and APIs *************************************

const course = {
    coursename: "Js in hindi",
    price: "999",
    courseInstructor: "Hitesh",
}

const {courseInstructor} = course // ----> De-Structuring of Object (Also : const {courseInstructor: Teacher} = course)
console.log(courseInstructor); // ----> Hitesh {Also : (console.log(Teacher)}

/* JSON 

{
    "name" = "hitesh",
    "coursename": "JS in Hindi",
    "price" = "free"
}
*/

// API 
[
    {},
    {},
    {}
]