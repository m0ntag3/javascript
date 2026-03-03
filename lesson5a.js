        // Arrow function
// A function that was introduced in the ECMAScript6 and they give us the latest/modern way of defining functions in a compact manner.
//  At times the arrow function can be said to be anonymous functions since they use the names of the variables they are contained in.

const sayHello = () => {
    console.log("This is an arrow function.")
}
sayHello();

console.log("=======================================")
// An Arrow function able to find the product of three numbers.
    // With parameters
const product = (x,y,z)  => x * y * z;
console.log(product(4,5,6));

console.log("-----------------------------------")

    //
const multiplication = () => {
    let num1 = 3
    let num2 = 5
    let num3 = 4
    answer = num1*num2*num3
    console.log("This is the product:",answer)
}
multiplication();
