//  Array of Objects In JavaScript -->

/*
    An array of objects in JavaScript is a data structure that stores
    multiple objects sequentially within a single array variable.
    Each element of the array is an object, and these objects can have
    different properties and values. This data structure is commonly
    used for organizing and managing collections of related data
*/

console.clear()
console.log()
console.log("Array Of Objects -->")
console.log()

let cars =
[
    {
        make: "Toyota",
        model: "Camry",
        year: 2018,
        color: "Silver"
    },
    {
        make: "Honda",
        model: "Civic",
        year: 2020,
        color: "Blue"
    },
    {
        make: "Ford",
        model: "Mustang",
        year: 2015,
        color: "Red"
    }
]

console.log(cars)
console.log()

console.log(`Accessing Objects -->\n`)
console.log(cars[0])

//  Push And Pop Methods -->

//  Adding a new car -->
cars.push({ make: "BMW", model: "X5", year: 2021, color: "Black" })

console.log()
console.log(cars)

//  Removing last car -->
cars.pop()

console.log()
console.log(cars)