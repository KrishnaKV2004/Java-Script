//  Scope In JavaScript ---->

/*
    In JavaScript, variables have either global scope or local scope,
    determining where they can be accessed within your code

    Global Scope -->

    Variables declared outside of any function, or declared with the
    var keyword inside a function without being enclosed in a function,
    have global scope
    Global variables are accessible from anywhere in the code, including
    inside functions
    They are declared in the global execution context and remain
    accessible throughout the entire program

    Local Scope -->

    Variables declared within a function have local scope
    Local variables are only accessible within the function they are declared in
    They are created when the function is invoked and destroyed when the
    function completes execution

    Variables declared with let and const also have block scope,
    which means they are scoped to the block ({ }) in which they are declared.
    This applies to variables declared inside if statements, for loops,
    while loops, and other block structures

    Understanding scope is crucial for writing JavaScript code that behaves
    as expected and avoids unintended side effects. It's important to properly
    manage variable scope to prevent naming conflicts and maintain
    clean and maintainable code
*/

console.clear()
console.log("Scope -->")
console.log()

//  Global -->

console.log("Global Scope -->")
console.log()

var globalVar = "I Am A Global Variable"

function myFunction1()
{
  console.log(globalVar)    // Output --> I Am A Global Variable
}

myFunction1()

//  Local -->

console.log()
console.log("Local Scope -->")
console.log()

function myFunction2()
{
    var localVar = "I Am A Local Variable"
    console.log(localVar)   // Output --> I Am A Local Variable
}
  
myFunction2()
//  console.log(localVar)   // Error --> localVar is not defined

//  Blocked Scope -->

console.log()
console.log("Blocked Scope -->")
console.log()

function myFunction3()
{
    if (true)
    {
      let blockVar = "I Am A Blocked-Scope Variable"
      console.log(blockVar) // Output: I Am A Blocked-Scope Variable
    }
    //  console.log(blockVar)   // Error --> blockVar is not defined
}
  
myFunction3()