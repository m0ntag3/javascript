// Comparison Operators
// Evaluates to a boolean answer
let number1 = 5
let number2 = 10
let number3 = 20

console.log(number1 == number2)
console.log(number1 >= number2)
console.log(number1 <= number2)
console.log(number1 > number2)
console.log(number1 < number2)
console.log(number1 != number2)
console.log(number1 != number1)


// Logical Operator
// Evaluate two or more conditions and they also give a boolean answer.

// Logical (AND)
// Evaluates to true if and only if all the conditions/statements are true
console.log((number1 < number2)&&(number2 > number1)&&(number3 > number2))

// Logical OR (||)
// Evaluates to true if one of the condition is true.
console.log((number1 > number2)||(number2 > number1))

// Logical NOT (!)
// Used to negate a condition/statement
console.log(!(number1 < number2))    


