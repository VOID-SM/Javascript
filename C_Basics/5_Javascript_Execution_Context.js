/* Javascript Execution Context:
1) Global Execution Context 
2) Functional Execution Context
3) Eval Execution Context 

2 Phases of Execution:
1) Memory Creation Phase
2) Execution Phase


let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(10, 2)

How the above code gets executes:

1)--> Global Execution : Asiigned in 'this' keyword
2)--> Memory Phase : 
        --> val1 = undefined
        --> val2 = undefined
        --> addNum = defination
        --> result1 = undefined
        --> result2 = undefined
3)--> Execution Phase:
        10 --> val1
        5  --> val2
        addNum --> New Variable Environment + Execution Thread (The Step 2 and 3 gets repeated for both result1 and result2)
                Memory Phase(Repeat) :
                    --> num1 = undefined
                    --> num2 = undefined
                    --> total = undefined
                Execution Phase(Repeat):
                    --> num1  --> 10
                    --> num2  --> 5
                    --> total --> 15
                --> 'total' gets return to the Global Execution 
                --> The New Variable Environment gets deleted for addNum 
        result1 --> 15
        addNum --> New Variable Environment + Execution Thread (The Step 2 and 3 gets repeated for both result1 and result2)
                Memory Phase(Repeat) :
                    --> num1 = undefined
                    --> num2 = undefined
                    --> total = undefined
                Execution Phase(Repeat):
                    --> num1  --> 10
                    --> num2  --> 2
                    --> total --> 12
                --> 'total' gets return to the Global Execution 
                --> The New Variable Environment gets deleted for addNum
        result2 --> 12 */