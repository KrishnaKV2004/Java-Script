//  Sort Methods In Array ---->

console.clear()
console.log("Sort Methods In Array -->")
console.log()

let cars = ['Pagani','Porsche','Koenigsegg','Aston Martin']

console.log("Array -->")
console.log()
console.log(cars)

/*
    Alphabetic Sort -->

    Method              Description

    • sort()            sorts an array alphabetically
    • reverse()         reverses the elements in an array
    • toSorted()        safe way to sort an array without altering the original array
    • toReversed()      safe way to reverse an array without altering the original array

*/

console.log()
console.log("Alphabetic Sort -->")
console.log()

console.log(cars.sort())
console.log(cars.reverse())
console.log(cars.toSorted())
console.log(cars.toReversed())

/*
    Numeric Sort -->

    By default, the sort() function sorts values as strings
    This works well for strings ("Apple" comes before "Banana")
    If numbers are sorted as strings, "25" is bigger than "100",
    because "2" is bigger than "1"
    Because of this, the sort() method will produce incorrect
    result when sorting numbers.
    You can fix this by providing a compare function

    Compare Function -->

    • (a,b) => a-b)                 Ascending Order
    • (a,b) => b-a)                 Descending Order
    • function(a, b){return a - b}  Ascending Order
    • function(a, b){return b - a}  Descending Order

    The compare function takes two parameters a and b,
    which are the two elements being compared. The function should return -->

    • A negative value if a should come before b
    • A positive value if a should come after b
    • Zero if a and b are equal and their order doesn't matter

    Let's try to sort a Numeric array with sort() and sort(comp func)
    and see how can we control the behaviour of sort() for numeric values
*/

console.log()
console.log("Numeric Sort -->")
console.log()

let nums = [27, 100, 404, 7, 54]

console.log(nums.sort())
console.log(nums.sort((a,b) => a-b))

/*
    Random Order Sort -->

    If you want to sort a numeric array in a random order in JavaScript,
    you can use a compare function that returns a random value

    nums.sort(() => Math.random() - 0.5)

    The compare function () => Math.random() - 0.5 generates a random value
    between -0.5 and 0.5 for each comparison. As a result, the array will be
    sorted in a random order each time you run the code
*/

console.log()
console.log("Random Sort -->")
console.log()

nums = [27, 100, 404, 7, 54]

console.log(nums.sort(() => Math.random() - 0.5))

/*
    Now run this code a few times and see
    how the array changes everytime in random order
*/

/*
    Drawback of Using Math.random() for Sorting -->

    The approach of using Math.random() directly in the compare function
    to sort an array in random order is not suitable for creating a
    truly random permutation of the array elements

    Solution --> Fisher Yates Method !

    The Fisher-Yates shuffle algorithm, also known as the Knuth shuffle,
    is a well-known method for randomly shuffling the elements of an array.
    This algorithm guarantees an unbiased shuffle, meaning every permutation
    of the array is equally likely and was introduced as early as 1938 !
*/

console.log()
console.log("Fisher Yates Method -->")
console.log()

function fisherYates(array)
{
    for (let i = array.length - 1; i > 0; i--)
    {
        const j = Math.floor(Math.random() * (i + 1))
        
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array
}

/*
    Working -->

    • Loop through the Array Backwards: The algorithm starts by looping through
                                        the array from the last element to the
                                        second element
    • Generate a Random Index:          Inside the loop, a random index j is
                                        generated using Math.random() multiplied
                                        by (i + 1). The Math.random() function
                                        returns a random floating-point number
                                        between 0 (inclusive) and 1 (exclusive).
                                        By multiplying it with (i + 1),
                                        we get a random integer between 0 and i,
                                        inclusive.
    • Swap Elements:                    The element at index i is swapped with
                                        the element at index j. This step
                                        effectively shuffles the elements in the
                                        array.
    • Return the Shuffled Array:        After the loop completes, the shuffled
                                        array is returned.

    Example -->

    Starting Array --> [10, 5, 40, 25, 100, 1]

    First Iteration (i = 5) -->

    • Generate a random index j between 0 and 5 (inclusive), let's say j = 2.
    • Swap array[5] and array[2]: [10, 5, 1, 25, 100, 40]

    Second Iteration (i = 4) -->

    • Generate a random index j between 0 and 4 (inclusive), let's say j = 1.
    • Swap array[4] and array[1]: [10, 100, 1, 25, 5, 40]

    Third Iteration (i = 3) -->

    • Generate a random index j between 0 and 3 (inclusive), let's say j = 2.
    • Swap array[3] and array[2]: [10, 100, 25, 1, 5, 40]

    ... and so on until the loop completes

    By the end of the loop, the array will be shuffled in a random order.
    Each element has an equal chance of being placed at any position in the array,
    ensuring an unbiased shuffle.
*/

let shuffledNums = fisherYates(nums)
console.log(shuffledNums)

/*
    Finding Minimum and Maximum in an array -->

    Methods             Description

    Math.min()          finds the lowest number in an array
                        doesn't work on arrays directly
    Math.max()          finds the highest number in an array
                        doesn't work on arrays directly
    Math.min.apply      find lowest number in an array
                        can be used on arrays directly
    Math.max.apply      find highest number in an array
                        can be used on arrays directly

    ~ We can also use '(...)' spread operators to pass array as arguments
*/

console.log()
console.log("Minimum And Maximum -->")
console.log()

nums = [27, 4, 65, 29, 42]

console.log("Array --> " + nums)
console.log()
console.log("Minimum --> " + Math.min(...nums))
console.log("Maximum --> " + Math.max.apply(null,nums))

/*
    Parameters -->

    The apply() method accepts two parameters -->

    thisArg:    The value of this provided for the function when executing it.
                In the context of Math.min(), the this value is not used,
                so it's typically set to null or undefined

    argsArray:  An array-like object that contains the arguments to pass
                to the function. This can be an array or an array-like object

    null:       It represents the this value inside the Math.min() function.
                Since Math.min() is a static method and doesn't depend on
                any object context (this), you can pass null or undefined
*/