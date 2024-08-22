//  Loops In JavaScript -->

/*
    Loops -->

    Loops are used to repeatedly execute a block of code until a specified
    condition evaluates to false. There are several types of loops available -->

    for loop            Executes a block of code a specified number of times
    while loop          Executes a block of code as long as a specified condition
                        is true
    do...while loop     Similar to the while loop, but the block of code is
                        executed once before the condition is tested
    for...in loop       Iterates over the enumerable properties of an object
    for...of loop       Iterates over iterable objects such as arrays,
                        strings, maps, sets, etc

    For Loop -->

    for (initialization; condition; increment/decrement)
    {
        // code block to be executed
    }

    While Loop -->

    while (condition)
    {
        // code block to be executed
    }

    Do While Loop -->

    do
    {
        // code block to be executed
    } while (condition)

    For ...In Loop -->

    for (variable in object)
    {
        // code block to be executed
    }

    For ...Of Loop -->

    for (variable of iterable)
    {
        // code block to be executed
    }
*/

console.clear()
console.log("Loops -->")
console.log()

//  For -->

console.log("For -->")
console.log()

for (let i=0; i<5; i=i+2)
{
    console.log(i)
}

// While -->

console.log()
console.log("While -->")
console.log()

let n=5

while(n>0)
{
    console.log(n)
    n--
}

//  Do While -->

console.log()
console.log("Do While -->")
console.log()

n=5

do
{
    console.log(n)
    n=n-2
} while(n>0)

//  For ...In -->

console.log()
console.log("For ...In -->")
console.log()

let cars =
{
    name : 'Huayra',
    power : '900 HP',
    torque : '1000 NM'
}

for (let key in cars)
{
    console.log("Key --> " + cars[key])
}

//  For ...Of -->

console.log()
console.log("For ..Of -->")
console.log()

const numbers = [1, 2, 3, 4, 5]
for (let number of numbers)
{
  console.log(number)
}