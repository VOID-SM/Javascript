// In-Built Loops in Array :
const coding = ["js", "ruby", "java", "python", "cpp"]
coding.forEach(function(val){ // ----> Name anything to parameter val item index etc
    console.log(val);
})

// Arroy Function :
const Code = ["js", "ruby", "java", "python", "cpp"]
Code.forEach((val) => { // ----> Arrow Function
    console.log(val);
})

//Another Way :
function printMe(item){
    console.log(item);
}
coding.forEach(printMe)

// On the array of Objects :
const myCoding = [
    {
        languageName : "Javascript",
        languageFileName : "js",
    },
    {
        languageName : "Java",
        languageFileName : "java"
    },
    {
        languageName : "C++",
        languageFileName : "cpp"
    }
]
myCoding.forEach( (item) => {
    console.log(item.languageFileName);
})