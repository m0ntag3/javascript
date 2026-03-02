// While Loop
// Below is a simple syntax of the while loop

// 1.Initialization of the variable
// 2. while keyword
// 3. Condition to be checked
// 4. Increment/Decrement
// 4. body of while loop

let i = 0;

while (i <= 10){
    console.log("The new number is:", i)
    i++   
}
console.log("++++++++++++++++++++++++")

// A JS example of map loop
const prices = [10, 21, 36, 41];
// Use map to create a new 'X2' array
const twicePrices = prices.map(price => price * 2);
console.log(twicePrices); 
// Output: [20, 42, 72, 82]
console.log(prices);        
// Output: [10, 21, 36, 41] (Original remains unchanged!)

console.log("/////////////////////////////////////")

const users = [
{ id: 1, name: 'Andrew', email: 'andrew@gmail.com' },
{ id: 2, name: 'Bob', email: 'bob@gmail.com' },
{ id: 3, name: 'Charlie', email: 'charlie@gmail.com' }
];
// Extract only the names into a simple string array
const userNames = users.map(user => user.name);
console.log(userNames);
// Output: ["Andrew", "Bob", "Charlie"]