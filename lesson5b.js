//  Arrow function with parameters

const greet = (name) => {
    console.log("Hello," + name +  ".How have you been? I trust that you are good.")
}

greet("James");
greet("Joseph");

console.log("=========================================")

// A function to find the area of a circle
const CircleArea = (radius) => {
    const pi = 3.142
    let area = pi * radius * radius
    console.log("The area of the circle is:"+ area + "cm\u00b2")
}
CircleArea(7)
CircleArea(35)

console.log("////////////////////////////////////////////")

const pi = 3.142
const Circlarea = (pi,radius) => {
    
    let area = pi * radius * radius
    console.log("The area of the circle is:"+ area + "cm\u00b2")
}
CircleArea(7)
CircleArea(35)

console.log("============================================")

// Example of an arrow function utilizing three(3) parameters
const half = 0.5
const triarea = (half, base , height) => {
    area = half * base * height
    console.log("The area of the trianlge is:"+ area + "cm\u00b2")
}

triarea(half,6,8)
triarea(half,8,20)