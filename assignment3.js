// For loop able to print out all the leap years from 2000 to 2026
for (let year = 2000; year <= 2026; year++) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log("This was a leap year:",year);
}
}

console.log("====================================================")

// Write a for loop to print all odd numbers from 1 to 19.
for (let number = 1; number <= 20; number++) {
    if (number % 2 != 0){
        console.log("This is an odd number:",number);
    }
}

console.log("====================================================")

// Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let num = 10; num >= 1; num--){
    console.log(num)
}

console.log("====================================================")

// Write a for loop to find the largest number in the array: [10, 20, 4, 45, 99, 1].
const numbers = [10, 20, 4, 45, 99, 1];
        // number[0] is used instead of let number = 0 to ensure that the numbers involved in the comparison are within the array.
let largest = numbers[0]; 
for (let n = 1; n < numbers.length; n++) {
    if (numbers[n] > largest) {
    largest = numbers[n];
    
}
}
console.log("The largest number is: ",largest); 

console.log("+++++++++++++++++++++++++++++++++++++")
// Spread Operator
// The ...numbers "spreads" the array out into individual arguments for the Math.max function
const max = Math.max(...numbers);
console.log("This is the largest number:",max); 

console.log("====================================================")

// Write a for loop to print the multiplication table of 5 from 5 x 1 to 5 x 10.
let n = 5; // Declare it once here

for (let i = 1; i <= 10; i++) {
  let result = n * i;
console.log(`${n} x ${i} = ${result}`);
}
console.log("====================================================")

// Write a for loop to print all odd numbers from 1 to 19.
for (let number = 1; number <= 20; number++) {
    if (number % 2 != 0){
        console.log("Odd number:",number);
    }
}

console.log("====================================================")

// Write a for loop to count down from 10 to 1 and print the numbers in the console.
for (let num = 10; num >= 1; num--){
    console.log(num)
}

console.log("====================================================")

// Research on arrow function, functions with parameters and anonymous functions in javascript.
    // 1.FUNCTIONS WITH PARAMETERS
        // 'name' and 'timeOfDay' are parameters
function greet(Appellation, timeOfDay) {
        // The punctuation mark used before Good and after the ! is called the backtick(`) found next to the numeral uno.
return `Good ${timeOfDay}, ${Appellation}!`;
}

console.log(greet("Andrew", "morning"));
console.log(greet("Tony","evening"))

console.log("---------------------------------------")

    // 2.ANONYMOUS FUNCTIONS
        // A function without a name.
        //  Done in two ways:
            // 1. Variable Assignment
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); 

console.log("///////////////////////////////////////")

            // Callback
setTimeout(function() {
console.log("This ran after 1 second");
}, 1000);

console.log("---------------------------------------")

    // 3. ARROW FUNCTIONS
        // Modern way to write anonymous functions
            // Traditional anonymous function
let x = 5;
const square = function(n) {
  return n * n; 
};
// Calling the function and storing the result in a variable
let result = square(x);
console.log("The square of five is:", result);


console.log("///////////////////////////////////////")

            // Arrow Version (Super clean!)
const squareArrow = n => n * n;

console.log(squareArrow(5)); 
