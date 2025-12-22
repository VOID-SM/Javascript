// Dates 

let myDate = new Date()
console.log(myDate.toString()); // Output ----> Mon Dec 22 2025 16:07:37 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString()); // Output ----> Mon Dec 22 2025
console.log(myDate.toLocaleString()); // Ouput ----> 12/22/2025, 4:07:37 PM
console.log(typeof myDate); // Output ----> Object

let newDate = new Date(2025, 11, 22) // Format ----> (Year, Month, Date) & Month : (0 - 11)
console.log(newDate.toDateString()); // Output ----> Wed Jan 22 2025

let createdDate = new Date("2025-04-19") // Date : 19/04/2025
console.log(createdDate.toLocaleString);

let myTimeStamp = Date.now() // ----> Gives the time in ms from 1st Jan 1970

let newerDate = new Date()
console.log(newerDate);
console.log(newerDate.getMonth() + 1); // ----> 12 (Because its December)
console.log(newerDate.getDay()); // ----> 22 (22nd December 2025)

// To modify the datetime
newerDate.toLocaleString('default', {
    weekday: "long",
})