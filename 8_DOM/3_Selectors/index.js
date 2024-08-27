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

/*
    getElementsByTagName() -->

    Description: Selects all elements with a specific tag name
    (e.g., div, p, span).Returns an HTMLCollection.
    Syntax: document.getElementsByTagName('tagName')
*/

let element = document.querySelector('.card .card-title')
console.log(element)

/*
    querySelector() -->
    Description: Selects the first element that matches a specified CSS selector.
    This method is more powerful and flexible as it can select by class, id, tag,
    or any other valid CSS selector.
    Syntax: document.querySelector('selector')
*/

let elem = document.querySelector('.card .card-title')
console.log(elem)

/*
    querySelectorAll() -->
    
    Description: Selects all elements that match a specified CSS selector.
    Returns a NodeList (which is similar to an array).
    Syntax: document.querySelectorAll('selector')
*/

let elements = document.querySelectorAll('.card .card-text')
console.log(elements)

/*
    getElementsByName() -->
    
    Description: Selects all elements that have a specific name attribute.
    Syntax: document.getElementsByName('name')
*/

let userelem = document.getElementsByName('username')
console.log(userelem)

/*
    Key Points -->

    HTMLCollection vs. NodeList -->

    getElementsByClassName(), getElementsByTagName(), and getElementsByName()
    return an HTMLCollection, which is a live collection (automatically updates
    when the DOM changes).
    querySelectorAll() returns a NodeList, which is a static collection
    (does not update when the DOM changes).
    
    Use Cases -->

    getElementById(): Best for selecting a unique element by id.
    getElementsByClassName() & getElementsByTagName(): Useful for selecting
    multiple elements by class or tag name.
    querySelector() & querySelectorAll(): Most versatile and powerful,
    supporting complex selectors.
*/