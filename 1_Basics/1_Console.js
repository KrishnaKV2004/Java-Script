//  Printing To Console In JavaScript ---->

/*
    Syntax -->

    console.log(<"String to print on console">)
    console.log(<variable data to print on console>)
    console.table([<var 1, var 2, var 3, .... var n>])
*/

let user = "Krishna Verma"
let email = "krishnaverma2004@gmail.com"
let pass = "KV2004"

console.clear()                     //  Clears the previous output of the console

console.log("User Info -->")
console.log()                       //  Prints an Empty Line
console.log(user)
console.log(email)
console.log(pass)

//  Table Format -->

console.log()
console.log("User Info Table -->")
console.log()
console.table([user, email, pass])  //  Prints in Table Format

/*
    There is one more statement
    alert()
    which is used to show pop ups in browsers
    but as we are using Node JS this will give error

    Usage -->
    alert(<Any String or Operation>)
    Example --> alert("Hello World !") will give popup saying Hello World !
*/

console.log()

// Concatenating Strign with Variables
console.log("Hello My Name is " + user)

//  As this is not convinient we use f-strings
//  Syntax --> console.log(`String ${variable}`)
console.log(`My E-Mail is ${email}`)