//  Search Methods In Strings In JavaScript

let str = "Tokyo is the capital of Japan. Japan has 9 regions"

console.clear()
console.log("Search In Strings -->")
console.log()

//  indexOf() --> returns the index of first occurrence of a string in a string
console.log(str.indexOf("Japan"))

//  lastIndexOf() --> returns index of last occurrence of specified text in string
console.log(str.lastIndexOf("Japan"))

console.log()

/*
    The search() method searches a string for a string (or a regular expression)
    and returns the position of the match

    The two methods, indexOf() and search(), are equal?

    They accept the same arguments (parameters), and return the same value?
    The two methods are NOT equal. These are the differences:
    The search() method cannot take a second start position argument.
    The indexOf() method cannot take powerful search values (regular expressions).
*/

//  match() --> returns an array of results of matching a string against a string

console.log(str.match("Japan"))

console.log()

//  More Arguments -->

console.log(str.match(/Japan/))     //  Regular Expression
console.log()
console.log(str.match(/Japan/g))    //  Global Search
console.log()
console.log(str.match(/tokyo/gi))   //  Global Case-insensitive Search
console.log()

//  matchAll() --> returns an iterator containing the results of matching a string against a string

console.log(str.matchAll("Tokyo"))
console.log()

//  includes() --> returns true if a string contains a specified value else false

console.log(str.includes("Osaka"))
console.log()

//  startsWith() --> returns true if a string begins with a specified value else false

console.log(str.startsWith("Tokyo"))
console.log(str.startsWith("Japan"))

//  Similarily endsWith checks if a string is ending with the specific string

