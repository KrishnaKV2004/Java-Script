//  Search In Arrays ---->

console.clear()
console.log("Search In Array -->")
console.log()

let cars = ['Huayra','720 S','Valkyrie','Huayra']

//  We will discuss about functions later this is just for demo !

function func(cars)
{
    return cars.length === 6
}

/*
    Search Methods In Array -->

    Method              Description

    • indexOf()         searches an array for an element value and returns
                        its position, if not found returns -1
                        If the item is present more than once,
                        it returns the position of the first occurrence

    • lastIndexOf()     returns the position of the last occurrence of
                        the specified element

    ~ Both have two arguments (item, start)

      item :            Item to search for in the array
      start:            Optional, Where to start the search.
                        Negative values will start at the given position
                        counting from the end, and search to
                        the end for indexOf() and beginning for lastIndexOf()

    • includes()        allows us to check if an element is present
                        in an array (including NaN, unlike indexOf)

    • find()            returns the value of the first array element
                        that passes a test function

    • findIndex()       returns the index of the first array element that
                        passes a test function
    
    • findLast()        start from the end of an array and return the value
                        of the first element that satisfies a condition

    • findLastIndex()   finds the index of the last element that
                        satisfies a condition
*/

console.log(cars.indexOf('Huayra'))
console.log(cars.lastIndexOf('Huayra'))
console.log(cars.includes('GTR R34'))
console.log(cars.find(func))
console.log(cars.findIndex(func))
console.log(cars.findLast(func))
console.log(cars.findLastIndex(func))