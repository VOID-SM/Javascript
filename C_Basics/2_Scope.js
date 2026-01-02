// var c = 300 
let a = 30
if(true){          // ----> Block Scope
    let a = 10
    const b = 20
    console.log("Inside:", a);  // ----> Inside Output : 10
    // var c = 30    // ----> This changes the value of c because of Var Dataytype
}
console.log("Outside:",a);   // ----> Outside Output : 30



function one(){
    const username = "Sagnik"

    function two(){
        const website = "youtube"
        console.log(username);    // ----> Sagnik
    }
    two()
}
one()

if (true) {
    const username = "Sagnik"
    if(username === "Sagnik"){
        const website = " youtube"
        console.log(username + website);  // ----> Sagnik youtube
    }
}

console.log(addone(5)) // ----> No Error will occur 
function addone(num){  // ----> Function
    return num + 1
}


addtwo(5)  // ----> Error will occur [If function declared as expression which means declared inside a Variable then we can't access the function before its declaration]
const addtwo = function(num){  // ----> Expression
    return num + 2
}