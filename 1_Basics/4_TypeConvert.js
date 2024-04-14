//  Type Conversion In JavaScript ---->

/* 
    To convert one data type to another

    Implicit Type Conversion : JavaScript will automatically convert data
    types when you perform operations on them.

    let num = 10
    let str = "5"
    console.log(num + str)

    Explicit Type Conversion (Type Casting) : You can explicitly convert
    data types using functions like Number(), String(), Boolean(), parseInt(),
    and parseFloat()

    let str = "10"
    let num = Number(str)
    console.log(num) // Output : 10 (converts string to number)

    let boolStr = "true"
    let bool = Boolean(boolStr)
    console.log(bool) // Output : true (converts string to boolean)

    let intStr = "10"
    let integer = parseInt(intStr)
    console.log(integer) // Output : 10 (converts string to integer)

    let floatStr = "3.14"
    let float = parseFloat(floatStr)
    console.log(float) // Output : 3.14 (converts string to floating-point number)

    let num = 10
    let str = num.toString()
    console.log(str) // Output : "10" (converts number to string)

    let num = 10
    let str = "The number is " + num
    console.log(str) // Output : "The number is 10" (converts number to string)

    let obj = { key: "value" }
    let jsonString = JSON.stringify(obj)
    console.log(jsonString) // Output : "{"key":"value"}"
    (converts object to JSON string)
*/

console.clear()
console.log("Type Conversion -->")
console.log()

//  Example -->

let score = "82"
console.log(score)
console.log(typeof(score))
let valueInInt = Number(score)
console.log(valueInInt)
console.log(typeof(valueInInt))

console.log()

//  Now let's try it with a string that contains characters other than numbers

score = "82*"
console.log(score)
console.log(typeof(score))
valueInInt = Number(score)
console.log(valueInInt)
console.log(typeof(valueInInt))

/*  
    We got a new data type when we tried to convert a string with characters
    which is NaN --> Not a Number
    and it has a type number
*/

//  Try converting different data types and figure out the result on your own