//  Functions with Array and Objects ---->

console.clear()
console.log("Function With Array & Objects -->")
console.log()

//  Let's make a function -->

function price(item)
{
    console.log(item)
    return item
}

price('$ 2700')

//  Let's call it with some more parameters -->

price('$ 2700', '$2500')    //  Output --> $ 2700

//  To treat this parameter as an array Rest Operator is used

function check(...item)
{
    console.log(item)
    return item
}

check('$ 2700', '$ 2500')   //  Output --> ['$ 2700', '$ 2500']

/*
    The rest operator (...) and the spread operator (...)
    are both represented by three dots (...),
    but they serve different purposes in JavaScript

    Rest Operator (...) -->
    The rest operator is used in function declarations to collect
    multiple function arguments into a single array parameter.
    It gathers the remaining parameters into an array.

    Spread Operator (...) -->
    The spread operator, on the other hand, is used to spread elements
    of an iterable (like an array or string) into individual elements.
    It can be used in array literals, object literals,
    or when calling functions.

    Use Caese -->

    With Arrays -->

    const arr1 = [1, 2, 3]
    const arr2 = [4, 5, 6]
    const combinedArray = [...arr1, ...arr2] // [1, 2, 3, 4, 5, 6]

    With Objects -->

    const obj1 = { a: 1, b: 2 }
    const obj2 = { c: 3, d: 4 }
    const combinedObject = { ...obj1, ...obj2 } // { a: 1, b: 2, c: 3, d: 4 }

    While Calling Functions -->

    function sum(a, b, c)
    {
        return a + b + c
    }
    const numbers = [1, 2, 3]
    console.log(sum(...numbers)) // Output --> 6
*/

console.log()
console.log("Object Functions -->")
console.log()

let cars =
{
    name : 'Nissan GTR R34',
    year : '1990',
    engine : 'RB26',
    engtype : 'Inline 6'
}

function car(obj)
{
    console.log(`${obj.name} produced in ${obj.year} had ${obj.engtype} ${obj.engine} engine !`)
}

car(cars)