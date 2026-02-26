// Object data type
// Data type equivalent to string but stores data in key-value pairs.

const car_details = {
    car_name : "Bolide",
    brand : "Bugatti",
    condition : "new",
    top_speed : 380
};
console.log(car_details)
// Object Data Type accessibility 
// 1.Dot metohod
console.log(car_details.brand)
// 2.Square bracket method
console.log(car_details["condition"])
// Indication of data type
console.log(typeof(car_details))

// Array data type
// data type with the ability to store other data types like strings, numbers and even other arrays.
let computer_components = ["Desktop", "Monitor", "Mouse","Keyboard"];
// Printing all
console.log(computer_components)
// Printing specific items
console.log(computer_components[0])
// Printing given range
console.log(computer_components.slice(1,4));
console.log(typeof(computer_components))

