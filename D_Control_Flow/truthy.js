// Falsy Values --> Values which are assumed false
/* 
1) false
2) 0
3) -0
4) BigInt 0n
5) ""
6) null, undefined, NaN
*/

// Truthy Values ----> Which are assumed to be true (Mostly anything but special ones)
/*
1) "0"
2) 'false'
3) " "
4) [] --> Empty Array
5) {} --> Object
6) function(){} --> Empty Funtion
*/

//Object
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is Empty");
}

//Nullish Coeliscing Operator(??): null undefined

let val1;
val1 = 5 ?? 10 // ---> Assigns the first value if it is not null or undefined else assigns the second value

//Ternary Operator 
condition ? true : false // ----> If the condition holds then do the first(Before :) else do the second(After :)