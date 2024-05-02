//  Functions In JavaScript ---->

/*
    Functions in JavaScript are blocks of code that perform a specific task
    or calculate a value. They are essentially reusable blocks of code that
    can be called or invoked from different parts of a program. Functions can
    take input in the form of parameters and can return a value as output

    Modularity:     Functions help in breaking down a program into smaller,
                    manageable pieces of code. Each function can perform a
                    specific task, making the code easier to understand, debug,
                    and maintain
    Reusability:    Once defined, functions can be called multiple times from
                    different parts of the program. This promotes code reuse
                    and avoids redundancy
    Parameters:     Functions can accept zero or more parameters, which are
                    variables that hold values passed to the function when it's
                    called. These parameters act as inputs for the function
    Return Value:   Functions can optionally return a value using the return
                    statement. The returned value can be used by the calling
                    code for further processing
    Declaration:    Functions can be declared using the function keyword followed
                    by a name and a set of parentheses containing optional
                    parameters. Function body is enclosed within curly braces {}
    Expression:     Alternatively, functions can be defined using function
                    expressions, where a function is assigned to a variable.
                    This provides flexibility and allows functions to be passed
                    as arguments to other functions
    Anonymous:      Functions can be created without a name, known as anonymous
                    functions. They are commonly used as callback functions or
                    as immediately invoked function expressions (IIFE)
    Arrow:          ES6 introduced arrow function syntax, which provides a shorter
                    and more concise way to write functions. Arrow functions are
                    particularly useful for writing inline functions or for
                    preserving the context of this
    Scope:          Variables declared inside a function are scoped to that
                    function and are not accessible from outside unless explicitly
                    returned or exposed
    Hoisting:       Function declarations are hoisted to the top of their
                    containing scope, allowing you to call a function before
                    it's declared in your code
*/

console.clear()
console.log("Functions -->")
console.log()

let name = 'Mitsuha'
let city = 'Tokyo'

//  Declaration -->

function greet()
{
    console.log(`Hello ${name} ! Welcome To ${city}`)
}

//  Call -->

greet()

//  Expression with Parameterized Function -->

destination = 'Osaka'

const train = function(destination)
{
    console.log(`Your Shinkansen To ${destination} Is Ready !`)
}

//  Call -->

train(destination)  //  Passing the parameters

//  Arrow Function -->

let time = '20 Minutes'

const ReachingTime = (time) =>
{
    console.log(`You Will Be Reaching In ${time}`)
}

ReachingTime(time)

//  Return Statement -->

function sum(a, b)
{
    return a + b
}

/*
    If you console log a+b and store the function in a variable it will
    be undefined as function will not return any value but if you are
    returning a value then like above then it will show the result
*/

let total = sum(15,12)
console.log(`Your Total Cost Will Be $ ${total}`)