//  Shorthand ways Of Arrow Function -->

console.clear()
console.log("Shorthand Ways Of Arrow Function")
console.log()

/*
    Arrow functions in JavaScript are a shorthand way to write functions
    and have some unique characteristics. They are often used for their
    concise syntax and the way they handle the this keyword.
    Here are different examples of how arrow functions can be used
*/

console.log("Basic -->")

const add = (a, b) =>
{
    return a + b
}
console.log(add(2, 3))
console.log()


console.log("Implicit Return -->")

const multiply = (a, b) => a * b // Same as (a, b) => (a * b)
console.log(multiply(2, 3))
console.log()


console.log("Single Parameter -->")

const square = x => x * x
console.log(square(4))
console.log()


console.log("No Parameters -->")

const greet = () => 'Hello World !'
console.log(greet())
console.log()


console.log("Returning Object Literal -->")

const createUser = (name, age) =>
({
    name: name,
    age: age
})
console.log(createUser('Tokyo', 20))
console.log()


console.log("As Callback -->")

const numbers = [1, 2, 3, 4, 5]
const doubled = numbers.map(num => num * 2)
console.log(doubled)
console.log()

/*
    The map function in JavaScript is a method used on arrays to
    create a new array by applying a provided function to each element
    of the original array

    We will study it later for now just remember this !
*/