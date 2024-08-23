//  Call Stack In JavaScript -->

/*
    Call Stack -->

    The call stack is a mechanism for an interpreter (like the JavaScript engine)
    to keep track of its place in a script that calls multiple functions.
    The stack records which function is currently being executed and what
    functions are called from within that function

    How the Call Stack Works ?

    Global Execution Context -->

    When a script is first run, the global execution context is created and
    pushed onto the call stack. This is the first thing that happens before
    any function calls are made.
    The global execution context is the base of the stack.

    Function Invocation -->

    Whenever a function is invoked, a new execution context is created for
    that function and pushed onto the top of the call stack.
    The function at the top of the stack is the one currently being executed.
    If this function calls another function, that new function's execution
    context is created and pushed onto the top of the stack.

    Function Returns -->

    When a function finishes execution (i.e., reaches a return statement
    or the end of its code block), its execution context is popped off the
    call stack.
    The control is then returned to the context just below it on the stack,
    which is then resumed.

    Program Completion -->

    When the stack is empty, it means all functions have been executed,
    and the program has finished running.
*/

console.clear()
console.log("Call Stack -->")
console.log()

function first()
{
    console.log("Inside first function")
    second()
    console.log("First function done")
}
  
function second()
{
    console.log("Inside second function")
    third()
    console.log("Second function done")
}
  
function third()
{
    console.log("Inside third function")
}
  
first()