//  Arrays In JavaScript -->

/*
    In JavaScript, arrays are used to store multiple values in a single variable.
    They can hold different types of data and are dynamic, meaning their size
    can change as items are added or removed.

    Creating Arrays -->

    You can create an array using square brackets []
    and separating items with commas ','

    let fruits = ['apple', 'banana', 'cherry'];

    Accessing Array Elements -->

    Array elements are accessed by their index,
    starting from 0 for the first element.

    console.log(fruits[0]); // Output: 'apple'

    Modifying Array Elements -->
    You can modify array elements by accessing them through their index.

    fruits[1] = 'orange';
    console.log(fruits); // Output: ['apple', 'orange', 'cherry']
*/

console.clear()
console.log("Arrays -->")
console.log()

//  Declaring Array -->

let cars = ['Huayra', '911 Turbo', 'GTR R34']

console.log(cars)
console.log()

//  Getting Array Elements By Index -->

console.log(`Car 1 --> ${cars[0]}`)
console.log(`Car 2 --> ${cars[1]}`)
console.log(`Car 3 --> ${cars[2]}`)

console.log()

//  Modifying Elements By Index -->

cars[2] = 'GTR R35'
console.log(cars)