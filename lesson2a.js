// Object Data Type:
// Data type that stores data in form of key-value pairs.

let person = {
    Name : "Collins Paul",
    Age : 19,
    isRegistered : true
};

console.log("The details of the person are:",person)

// Notation Two (SQUARE BRACKET): To display specific specification
console.log(person["Age"])

// Notation One (DOT): To display specific specification
console.log(person.Name)

// Checking data type
console.log(typeof(person))


//  Array data type
// A collection of items that are all indices.
let fruits = ["Mango", "Banana","Lime","Dragonfruit","Raisin","Peach"," Strawberry"]

console.log("The entire array of fruits is:",fruits)

//  To access the array items we use the index
console.log(fruits[3])

// Slicing items of an array (Specific range)
console.log(fruits.slice(2,6))