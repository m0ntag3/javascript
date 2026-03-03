// escape characters
    // Using single quote
// Error: Unexpected identifier
// let phrase = 'Don't do that'; 

// Correct
let phrase = 'Don\'t do that';
console.log(phrase);

console.log("============================================");

    // Formatting text
let item_list = ("Apple", "Pineapple", "Kiwi", "Orange")
console.log("Item List:\n\t- Apple\n\t- Pineapple\n\t- Kiwi\n\t- Orange");

console.log("============================================");

    // Advanced & Unicode escapes
// Hexadecimal (\xXX): Represents characters using two-digit hex codes.
    // \x41 is "A".
// Unicode (\uXXXX): Represents characters using four-digit hex codes.
    // \u00A9 is "©".
// Extended Unicode (\u{XXXXXX}): Used for characters with larger code points, like emojis.
    // \u{1F600} is "😀".

// Callback function - Function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// DIFFERENCE BETWEEN USING let AND const
// let - allows you to change the value of a variable later in your code. It's ideal for counters or variables used in loops.
let score = 10;
score = 15;
console.log(score);
// Works as wanted

console.log("------------------------------------------------")

// const - prevents you from reassigning a new value to the variable name. 
const birthYear = 1995;
birthYear = 2000;
console.log(birthYear) 
// Gives typeerror