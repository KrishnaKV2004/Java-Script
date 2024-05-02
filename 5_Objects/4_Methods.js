//  Object Methods -->

console.clear()
console.log("Object Methods -->")
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

/*
    Object methods can include built-in methods for working with
    object properties, such as accessing keys and values, checking
    if a property exists, and more. Here are some commonly
    used object methods -->

    Object.keys()               returns an array of a given object's own enumerable property names
    Object.values()             returns an array of a given object's own enumerable property values
    Object.entries()            returns an array of a given object's own enumerable string-keyed property [key, value] pairs
    Object.assign()             used to copy the values of all enumerable own properties from one or more source objects to a target object
    Object.hasOwnProperty()     returns a boolean indicating whether the object has the specified property as its own property
*/

console.log("Keys -->")
console.log(Object.keys(cars))
console.log()
console.log("Values -->")
console.log(Object.values(cars))
console.log()
console.log("Entries -->")
console.log(Object.entries(cars))
console.log()
console.log("Has Own Property -->")
console.log(Object.hasOwnProperty('make'))