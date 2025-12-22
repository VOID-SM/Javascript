/*  console.log(a >= b) ----> true/false
    console.log(a <= b) ----> true/false
    console.log(a != b) ----> true/false
    console.log(a == b) ----> true/false */

"1" > 2 // conversions occurs and both are treat as numbers

null > 0 // ----> false
null == 0 // ----> false
null >= 0 // ----> true

undefined > 0 // ----> false
undefined == 0 // ----> false
undefined < 0 // ----> false

2 == "2" // ----> true(due to conversion) 
2 === "2" // ----> false(checks the datatype also)