//  Array Methods In JavaScript -->

console.clear()
console.log("Array Methods -->")
console.log()

/*
    Method          Description

    length          returns the length (size) of an array
    toString()      converts an array to a string of
                    (comma separated) array values   
    at()            returns an indexed element from an array
    join()          joins all array elements into a string.
                    It behaves just like toString(),
                    but in addition you can specify the separator
    pop             removes the last element from an array
    push()          adds a new element to an array (at the end)
    shift()         removes the first array element and "shifts"
                    all other elements to a lower index
    unshift()       adds a new element to an array (at the beginning)
                    and "unshifts" older elements
    delete()        deletes element at specified index
    concat()        creates a new array by merging
                    (concatenating) existing arrays
    copyWithin()    copies array elements to another position in an array
    flat()          creates a new array with sub-array
                    elements concatenated to a specified depth
    slice()         slices out a piece of an array into a new array
    splice()        can be used to add new items to an array
    toSpliced()     safe way to splice an array without
                    altering the original array

    ~ Using delete() leaves undefined holes in the array
      Use pop() or shift() instead.
*/

let cars = ['Huayra', '911 Turbo', 'GTR R34']
let cars1 = ['Maybach S 680', 'BMW M5 CS']
let cars2 = ['Lexus IS 500', '370 Z']

console.log(cars)
console.log()

console.log("Length --> " + cars.length)
console.log("String --> " + cars.toString())
console.log("At 2 --> " + cars.at(1))
console.log("Joined --> " + cars.join('+'))

console.log()

console.log("Poped --> " + cars.pop())
console.log("After Pop --> " + cars)
console.log("Pushed --> " + cars.push('Rolls Royce'))
console.log("After Push --> " + cars)
console.log("Shift --> " + cars.shift())
console.log("After Shift --> " + cars)
console.log("Unshift --> " + cars.unshift('Huayra'))
console.log("After Unshift --> " + cars)

console.log()

console.log("Delete --> " + delete(cars[1]))
console.log("After Delete --> " + cars)
console.log("Length --> " + cars.length)

//  Notice how the element is replaced by empty string not deleted

console.log()

cars = ['Huayra', '911 Turbo', 'GTR R34']   //  Re Declared

cars = cars.concat(cars1,cars2)     //  Multiple Arguments are also allowed
console.log(cars)
console.log()

/*
    Copy Within takes 3 parameters -->

    target (required):  The index at which to copy the elements to.
    start (optional):   The index at which to start copying elements from.
    end (optional):     The index at which to stop copying elements
                        from (end index is not included).
*/

cars.copyWithin(2,0)
console.log(cars)

/*
    Flat Method -->

    The flat() method in JavaScript is used to flatten a nested array
    structure by removing nested arrays and concatenating their elements
    into a new array. It flattens the array to the specified depth
    or to a depth of 1 if no depth is specified

    Syntax --> array.flat([depth])

    depth: (Optional) The depth level specifying how deep nested
    arrays should be flattened. Defaults to 1
*/

//  Examples -->

console.log()
console.log("Flat Method -->")
console.log()

//  Flatten a simple nested array -->

let nestedArray = [1, [2, 3], [4, 5]]
let flattenedArray = nestedArray.flat()
console.log(nestedArray)
console.log(flattenedArray)
console.log()

//  Flatten a deeply nested array to a specific depth -->

let deeplyNestedArray = [1, [2, [3, [4, 5]]]]
flattenedArray = deeplyNestedArray.flat(2)
console.log(deeplyNestedArray)
console.log(flattenedArray)
console.log()

//  Flatten a deeply nested array completely -->

deeplyNestedArray = [1, [2, [3, [4, [5]]]]]
flattenedArray = deeplyNestedArray.flat(Infinity)
console.log(deeplyNestedArray)
console.log(flattenedArray)
console.log()

//  You can also use flat() in combination with map() to flatten and transform arrays

let array = [1, 2, 3, [4, 5], [6, 7]]
let transformedArray = array.flatMap((num) => [num * 2])
console.log(array)
console.log(transformedArray)
console.log()
