// Exporting modules
//  We export modules so as to use/utilize them in other files/modules in our program.

    // Method one: Including the export function with the ongoing procedure
export const calculator = (x, y) => {
    let difference = x - y

    console.log("the difference of the two numbers is:", difference)
}


export const simpleInterest = (principle,rate,time) => {
    let si = (principle * rate * time)/100
    console.log("The simple interest gained is:", si)
}
    // Method two: Declaring the procedure as the export function within curlybraces.
const bmi = (weight, height) => {
    let answer = weight /(height ** 2)
    console.log("The BMI of the person is:",answer + "cm\u00b3")
}
export{bmi} 

