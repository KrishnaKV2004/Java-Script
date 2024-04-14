/*  JavaScript Variables ---->

  Variables --> A variable in JavaScript is a named storage location for data.
  It can store any type of data, such as numbers, strings, objects, and arrays.
  Variables are declared using the var, let, or const keyword.

  Syntax --> <variable keyword> <variable name> = <variable data>

  Variable Keywords --> 

  • var --> Used to 
  • let -->   
  • const -->  
*/

var name = "Krishna Verma"
let email = "krishna@gmail.com"
const pass = 2004

/*  var is not used now as it has issues with block and functional scope
    let is used the most as it works with scope
    const is used when we have to declare variable once as it can't be
    changed once declared
*/

//  Here I am changing the values of let and const variables

email = "krishna2004@gmail.com"
console.log(email)
pass = "KV2004"
console.log(pass)

//  Now Execute to see what happens if we change let and const variables
/*
    email will be printed on console but pass will give error
    TypeError: Assignment to constant variable
    because const is declared once !
*/