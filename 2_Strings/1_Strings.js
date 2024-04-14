//  Strings In JavaScript ---->

/*
    Strings are for storing text
    Strings are written with quotes
*/

let user = "Krishna Verma"

console.clear()
console.log("String Methods -->")
console.log()

//  New Way of declaring a string by Object and Constructor -->

const userName = new String("Tokyo")

//  String Methods -->

//  length --> returns length of the string
console.log(user.length)

//  charAt() --> returns the character at a specified index in a string
console.log(user.charAt(0))

//  charCodeAt() --> returns code of the character at a specified index in a string
console.log(user.charCodeAt(0))

//  at() --> same as charAt returns the character at a specified index in a string
console.log(user.at(2))

/*
    Slicing a string -->

    Methods to slice a string -->
    • slice(start, end)
    • substring(start, end)
    • substr(start, length)
*/

console.log()
console.log("Slicing -->")
console.log()

console.log(user.slice(0,7))
console.log(user.substring(0,5))
console.log(user.substr(8,12))

console.log()

//  toUpperCase() and toLowerCase()
console.log(user.toUpperCase())     //  string is converted to upper case
console.log(user.toLowerCase())     //  string is converted to lower case

//  concat() --> joins two or more strings
console.log(user.concat(" ", "is 20 years old"))

console.log()

//  trim() --> removes whitespace from both sides of the string
let str = "  Hello There     "
console.log(str.trim())

//  trimStart() --> removes whitespaces from start only
//  trimEnd() --> removes whitespaces from end only

console.log()

//  padStart() --> pads a string from the start
console.log(user.padStart(15, "0"))   //  will add 0 at start till length is 15

//  padEnd() --> pads a string from the end
console.log(user.padEnd(15, "0"))     //  will add 0 at end till length is 15

console.log()

//  repeat() --> returns a string with a number of copies of a string
console.log(user.repeat(2))

console.log()

//  replace() --> replaces a specified value with another value in a string
console.log(user.replace("Verma", "Tokyo"))

//  replaceAll() --> allows you to specify a regular expression to be replaced
console.log(user.replaceAll(/Verma/g, "Seoul"))

console.log()
console.log("Split -->")
console.log()

/*
    Split -->

    Returns Array

    • split(",")     Split on commas
    • split(" ")     Split on spaces
    • split("|")     Split on pipe
    • split("")      Single characters
*/

let splt = "Krish,na Verma| is in Tokyo"

console.log(splt.split(","))
console.log(splt.split(" "))
console.log(splt.split("|"))
console.log(splt.split(""))

/*
    __proto__ is a property of JavaScript objects that
    provides a way to access an object's prototype directly
*/

console.log()
console.log(userName.__proto__)