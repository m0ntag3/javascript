//  Functions with parameters
// Parameters - Values that get passed as arguments when invoking a function.
// Help create reusable functions throughout a program.

function greeting(name){
    console.log("Hello",name,",how have you been?")
}
//  The names of people input are the arguments.
greeting("Fred")
greeting("Gilberto")
greeting("James & John")

console.log("================================================")

// below is a function with parameters to calculate the sum of two numbers
function addition(number1, number2){
    sum = number1 + number2
    console.log("the sum of the numbers is:", sum)
}
addition(45,60)
addition(67,90)

console.log("================================================")

// Area of triangle with base 20cm and height 12cm 
let half = 0.5
function areaTriangle(base,height){
    area = half * base * height
    console.log("The area of the triangle is:",area,"cm\u00B2")
}
areaTriangle(20,12)
areaTriangle(6,8)
areaTriangle(9,54)

console.log("================================================")
// Simple interest with principle 50000, rate as 5% and time 8 years
let percentage = 0.01
function simpleinterest(principle,rate,time){
    simple = principle * rate * time * percentage
    console.log("The simple interest is:",simple)
}
simpleinterest(50000,5,8)