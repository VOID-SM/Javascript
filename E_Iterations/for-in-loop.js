// For-In Loop (Used in Object)
const lang = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "Swift by Apple",
}

for (const key in lang) {
    console.log(lang[key]); // ----> Output : Javascript C++ Ruby Swift by Apple
}

// For Arrays :
const Programming = ["js", "go", "cpp", "java"]
for (const key in Programming) {
    // console.log(key); // ----> For Arrays the keys are the index 
    console.log(Programming[key]); // ----> ["js", "go", "cpp", "java"]
}