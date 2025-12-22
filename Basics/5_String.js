const name = "Sagnik"
const repoCount = 19;

console.log(name + repoCount + "Maity"); // ----> Sagnik19Maity(Old syntax)
console.log(`My name is ${name} and my repo count is ${repoCount}`); // ----> New Syntax

const gameName = "Mine-craft-Techno-Blade-Never-Dies"
console.log(gameName[0]);           // ----> M (Character at 0 index)
console.log(gameName.__proto__);    // ----> {} (Object)
console.log(gameName.length);       // ----> 9 (Length of the string)
console.log(gameName.toUpperCase()) // ----> MINECRAFT (Convert the string to Upper Case letters)
console.log(gameName.charAt(3));    // ----> e (Character at 3rd index)
console.log(gameName.indexOf('t')); // ----> 8 (Index of character 't')

// This does not change the original string as it is a primitive datatype

const newString = gameName.substring(0, 4)
console.log(newString);               // ----> Mine (Substring from 0 -> 3 (excluding the 4th))

const str = "    sagnik  "
console.log(str);                     // ---->     sagnik  
console.log(str.trim());              // ----> sagnik
const url = "https://sagnik.com/sagnik%20maity"
console.log(url.replace('%20', '-')); // ----> https://sagnik.com/sagnik-maity
console.log(url.includes('sagnik'));  // ----> true/false

console.log(gameName.split("-")); /* ----> Makes an array of the string by splitting it according to the passed character 
Here it is : ["Mine", "Craft", "Techno", "Blade", "Never", "Dies"] */