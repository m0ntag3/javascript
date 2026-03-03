// Modules in Javascript
 // Exist in two formats which were formerly the AMD(Asynchronous Module Definition) and UMD(Universal Module Definition):
        // 1. ES Modules (ESM)
        // 2. CommonJs(CJS)

        // ES Modules 
    // The standard for modern Javascript entailing the use of clear,readable syntax to share code between files.
    // Done in two ways:
            // a. Named Exports
            // b. Default Exports

            // Named Exports
        // Allows for exportation of multiple values from a single file.
        // The importation phase uses names matching exactly like in the source.
import { product, quotient } from './tst.js';
console.log(product(5, 9));

            // Default Export
import exp from './test.js';
exp("Hey");




// 1. ARROW FUNCTIONS
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

console.log("The square of five is:",squareArrow(5)); 