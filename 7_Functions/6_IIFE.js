//  IIFE [Immediately Invoked Function Expression] -->

/*
    What is IIFE ?

    An IIFE (Immediately Invoked Function Expression) is a JavaScript function
    that runs as soon as it is defined. The primary purpose of an IIFE is to
    create a new scope to avoid polluting the global namespace, which can help
    prevent variables from conflicting with other scripts

    Syntax of an IIFE -->

    An IIFE is usually written by wrapping the function in parentheses and
    immediately invoking it with another set of parentheses

    (function()
    {
        Code here runs immediately
        console.log('This is an IIFE')
    })();

    IIFE with Arrow -->

    (() =>
    {
        console.log('This is an IIFE with an arrow function')
    })();

    ~ Semicolons are used in end of the IIFE to end the context

    With Parameter -->

    ((name) =>
    {
        console.log(Hello ${name})  
    })('Seoul');
*/

console.clear()
console.log("IIFE -->")
console.log()

(() =>
{
    console.log('This is an IIFE !')
})();