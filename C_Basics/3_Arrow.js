const user = {
    username: "Sagnik",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, Welcome to Website`);
        console.log(this); // ----> 'this' tells us about the current context. Here it is the welcomeMessage function
    }

}
user.welcomeMessage() // ----> Sagnik, Welcome to Website
user.username = "Sam"
user.welcomeMessage() // ----> Sam, Welcome to Website

// Arrow Function 
const Func = () => {
    let username = "Saggy"
    console.log(this);  // ----> {}
    console.log(this.username); // ----> undefined
}

const addTwo = (num1, num2) => (num1 + num2)  // ----> Implicit way of defining Arrow Function and after this => everything shoul dbe under parenthesis()
const addThree = (num1, num2, num3) => { // ----> If written inside {}, then use return 
    return num1 + num2 
 }