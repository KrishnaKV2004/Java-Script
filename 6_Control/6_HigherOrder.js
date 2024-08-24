//  Higher Order Loops In JavaScript -->

/*
    Higher Order Loops -->

    higher-order loops refer to methods that iterate over arrays and other
    iterable objects, where you can pass a function as a parameter.
    These loops are higher-order functions because they take other functions
    as arguments or return them
*/

console.clear()
console.log("Higher Order Loops -->")
console.log()

/*
    forEach -->

    Executes a provided function once for each array element

    Syntax -->

    array.forEach((element, index, array) =>
    {
        // code to execute
    })
*/

console.log("ForEach -->")
console.log()

const cars = ['Nissan GTR', 'Porsche 911', 'Pagani Huayra']
console.log(cars)
console.log()

cars.forEach((car) =>
{
  console.log(`Car --> ${car}`)
})

//  ~   forEach does not return anything !

/*
    Filter -->

    Creates a new array with all elements that pass the test implemented
    by the provided function

    Syntax -->

    let newArray = array.filter((element, index, array) =>
    {
        // return true or false
    })
*/

console.log()
console.log("Filter -->")
console.log()

const numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers)
console.log()

//  We have to filter out even elements in a new array !

const even = numbers.filter((num) => num%2 === 0)
console.log(even)

/*
    Can also be written as -->

    const even = numbers.filter((num) =>
    {
        return (num%2 === 0)
    })

    ~   Example Of Explicit Return !
*/

/*
    Map -->

    Creates a new array populated with the results of calling a provided
    function on every element in the calling array

    Syntax -->

    let newArray = array.map((element, index, array) =>
    {
        // return new element
    })
*/

console.log()
console.log("Map -->")
console.log()

const values = [1,2,3,4,5]
console.log(values)
console.log()

let squares = values.map((val) =>
{
    return (val*val)
})

console.log(squares)

/*
    Reduce -->

    Executes a reducer function (that you provide) on each element
    of the array, resulting in a single output value

    Syntax -->

    let result = array.reduce((accumulator, currentValue, index, array) =>
    {
        // return updated accumulator
    }, initialValue)
*/

console.log()
console.log("Reduce -->")
console.log()

console .log(numbers)
console.log()

let sum = numbers.reduce((total, num) =>
{
    return total + num
},0)

console.log(sum)