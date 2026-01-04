// for of
const arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello World!"
for(const greet of greetings){
    console.log(`Each char is ${greet}`);
}

// Maps
const map = new Map()
map.set('IN', "India") // ----> Map only stores Unique Values
map.set('USA', "United States of America")
map.set('Fr', "France")
console.log(map);  // ----> Output the map as an Object

for(const [key, value] of map){ // ----> [key, value] --> Allows the map to destructurize
    console.log(key, ':-', value); // ----> Output(form) : IN :- India 
}