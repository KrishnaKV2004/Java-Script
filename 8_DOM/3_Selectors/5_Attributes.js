//  Attributes Of Selectors -->

/*
    Attributes -->

    In JavaScript, when you select an HTML element using one of the selector
    methods (like getElementById(), querySelector(), etc.), you can access and
    manipulate various attributes of the selected element. Below are some common
    attributes and how they can be used :
*/

//  These are just for notes, these won't apply as script is not added to HTML !

/*
    id -->

    Description: The id attribute uniquely identifies an element in the DOM.
*/

let element = document.getElementById('header')
console.log(element.id)
element.id = 'newHeader'

/*
    className -->

    Description: Represents the class or classes of an element.
    This is a string of all class names separated by spaces.
*/

let element = document.querySelector('.card')
console.log(element.className)
element.className = 'card card-secondary'

/*
    innerHTML -->

    Description: Represents the HTML content inside an element.
    It can be used to get or set the HTML content.
*/

let element = document.querySelector('.card-text')
console.log(element.innerHTML)
element.innerHTML = '<strong>Updated Text</strong>'

/*
    textContent -->

    Description: Represents the text content inside an element,
    excluding any HTML tags.
*/

let element = document.querySelector('.card-text')
console.log(element.textContent)
element.textContent = 'Updated Text'

/*
    style -->

    Description: Represents the inline styles of an element.
    You can get or set CSS properties directly.
*/

let element = document.querySelector('.card')
console.log(element.style.backgroundColor)
element.style.backgroundColor = 'blue'

/*
    src -->
    
    Description: The src attribute is used for elements like
    <img> and <script> to define the source file.
*/

let image = document.querySelector('img')
console.log(image.src)
image.src = 'newImage.jpg'

/*
    href -->

    Description: The href attribute is used in <a> (anchor) elements
    to define the destination URL.
*/

let link = document.querySelector('a')
console.log(link.href)
link.href = 'https://www.newsite.com'

/*
    value -->

    Description: Represents the value of form elements like
    <input>, <textarea>, and <select>.
*/

let input = document.querySelector('input')
console.log(input.value)
input.value = 'New Value'

/*
    attributes -->

    Description: Represents all attributes of an element as a collection.
    You can loop through them or access a specific attribute.
*/

let element = document.querySelector('.card')
console.log(element.attributes)
console.log(element.attributes['class'].value)

/*
    parentElement and children -->

    Description: parentElement refers to the parent node of an element,
    and children is a collection of the child elements.
*/

let element = document.querySelector('.card')
console.log(element.parentElement)
console.log(element.children)

/*
    getAttribute() and setAttribute() -->

    Description: getAttribute() retrieves the value of a specified attribute,
    and setAttribute() sets the value of a specified attribute.
*/

let element = document.querySelector('.card')
console.log(element.getAttribute('class'))
element.setAttribute('class', 'newCardClass')