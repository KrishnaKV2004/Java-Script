//  Maths In JavaScript ---->

console.clear()
console.log("Maths In JavaScript -->")
console.log()

/*
    It is a library that comes with JS by deafult
    but Let's see what actually maths is -->
*/

console.log(Math)   //  Output --> Object [Math] {}

//  Yes it is an object having many properties !

//  Some Properties (Consonants) -->

console.log()
console.log("Properties (Consonants) -->")
console.log()

console.log(Math.abs(-27))          //  Changes to absolute value
console.log(Math.E)                 //  Returns Eular's Number
console.log(Math.PI)                //  Returns PI
console.log(Math.sqrt(16))          //  Returns Square root
console.log(Math.SQRT1_2)           //  Returns Square root of 1/2
console.log(Math.LN2)               //  Returns Natural log of 2
console.log(Math.LN10)              //  Returns Natural log of 10
console.log(Math.log(10))           //  Returns Log of specific value
console.log(Math.LOG2E)             //  Returns Base 2 log of E
console.log(Math.LOG10E)            //  Returns Base 10 log of E

//  Some Methods -->

console.log()
console.log("Methods -->")
console.log()

let num = 27.02
let numList = [25, 24, 27]

console.log(Math.round(num))        //  Rounds the value to nearest integer
console.log(Math.ceil(num))         //  Returns number rounded upto its nearest integer
console.log(Math.floor(num))        //  Returns number rounded down to its nearest integer
console.log(Math.trunc(num))        //  Returns the integer part of the number
console.log(Math.sign(num))         //  Returns -1 if number is -ve, 0 if 0 and 1 if +ve
console.log(Math.pow(num,2))        //  Returns number to the power specified
console.log(Math.min(27,25))        //  Returns minimum among the list of arguments
console.log(Math.max(...numList))   //  Returns minimum among the list of arguments

/*
    ~ In Math.max() method we have used '...' spread operator
      which seperates the elements of list as individual arguments for method !
*/

//  Trigonometry Methods -->

console.log()
console.log("Trigonometry Methods -->")
console.log()

/*
    In these methods angle passed as the parameter is in Radians

    Method to convert Radians to Degrees -->
    Angle in Radians = Angle in Degrees x PI / 180
*/

console.log(Math.sin(90 * Math.PI / 180))   //  Returns sin of number (-1 to 1)
console.log(Math.cos(0 * Math.PI / 180))    //  Returns cos of number (-1 to 1)
console.log(Math.tan(45 * Math.PI / 180))   //  Returns tan of number

/*
    More Methods -->

    Try out these methods own your own !

    Method              Description

    • acos(x)           Returns the arccosine of x, in radians
    • acosh(x)	        Returns the hyperbolic arccosine of x
    • asin(x)	        Returns the arcsine of x, in radians
    • asinh(x)	        Returns the hyperbolic arcsine of x
    • atan(x)	        Returns the arctangent of x as a numeric value between -PI/2 and PI/2 radians
    • atan2(y, x)	    Returns the arctangent of the quotient of its arguments
    • atanh(x)	        Returns the hyperbolic arctangent of x
    • cbrt(x)	        Returns the cubic root of x
    • cosh(x)	        Returns the hyperbolic cosine of x
    • exp(x)	        Returns the value of Ex
    • sinh(x)	        Returns the hyperbolic sine of x
    • tanh(x)	        Returns the hyperbolic tangent of a number
*/