//  Execution Context In JavaScript -->

//  ! Before Moving ahead make sure to complete functions for better understanding

/*
    In JavaScript, the execution context is a concept that defines the
    environment in which JavaScript code is executed. Each time a function
    is invoked or the global code is executed, a new execution context
    is created. The execution context is crucial because it determines
    what variables, functions, and objects are accessible during
    code execution, as well as the value of this

    Types of Execution Contexts -->

    There are three main types of execution contexts in JavaScript

    Global Execution Context
    Function Execution Context
    Eval Execution Context
*/

console.clear()
console.log("Execution Context -->")
console.log()

/*
    Global Execution Context -->
    
    Scope: The global execution context is created when the JavaScript engine
    starts executing the code. It is the outermost context, and it remains
    active until the program terminates.
    this Keyword: In the global execution context, this refers to the global
    object (e.g., window in browsers or global in Node.js).
    Variables and Functions: Any variables or functions declared outside of
    any function are stored in the global execution context 
*/


console.log("Global EC -->")
console.log()


var globalVar = "I'm a global variable"

function globalFunction()
{
  console.log("I'm a global function")
}

//  console.log(this === window)  // true in a browser will not work in node
console.log(globalVar)            // "I'm a global variable"
globalFunction()                  // "I'm a global function"

/*
    Function Execution Context -->

    Scope: Every time a function is invoked, a new function execution context
    is created. This context is specific to that function call and is
    destroyed once the function execution is complete.
    this Keyword: The value of this in a function execution context depends
    on how the function is called. It could refer to the global object,
    an object, or be undefined in strict mode.
    Local Variables: Variables and functions declared within a function are
    stored in the function's execution context
*/

console.log()
console.log("Funtion EC -->")
console.log()


function exampleFunction()
{
    var localVar = "I'm a local variable"
  
    function localFunction()
    {
      console.log("I'm a local function")
    }
  
    console.log(this)           // Depends on how the function is called
    console.log(localVar)       // "I'm a local variable"
    localFunction()             // "I'm a local function"
}
  
exampleFunction()

/*
    Eval Execution Context -->

    Scope: When the eval() function is used to execute a string of code,
    it creates a new eval execution context. The code executed inside eval()
    has access to the variables and functions of the scope in which eval()
    is called.
    this Keyword: The value of this inside the eval execution context is the
    same as the value of this in the scope where eval() was invoked.
    Usage: eval() is generally discouraged due to potential security risks
    and performance issues
*/

console.log()
console.log("Eval EC -->")
console.log()


var x = 10

function evalExample()
{
  var y = 20
  eval("var z = x + y; console.log(z);")    // 30
  console.log(z)                            // 30, z is accessible outside eval
}

evalExample()