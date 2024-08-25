//  DOM Selectors In JavaScript -->

/*
    Selectors -->

    Selectors are methods used to access or select HTML elements in the
    Document Object Model (DOM). These selectors allow you to manipulate,
    style, or retrieve information from specific elements on a webpage
*/
/*
    There are various types of selectors, some of them are -->

    getElementById() -->

    Description: Selects an element by its id attribute.
    Syntax: document.getElementById('id')
*/

let logo = document.getElementById('logo')
console.log(logo)

/*
    ~   You can check this on web console with live server
        On web console you don't have to assign it to a variable
        Just write the syntax document.getElementById('id')
        and it will return the element which has id logo
*/
/*
    getElementsByClassName() -->

    Description: Selects all elements that have a specific class.
    Returns an HTMLCollection (which is similar to an array).
    Syntax: document.getElementsByClassName('className')
*/

let classelem = document.getElementsByClassName('card')
console.log(classelem)