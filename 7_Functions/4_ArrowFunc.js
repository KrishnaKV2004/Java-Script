//  Arrow Functions In JavaScript -->

/*
    (this) Keyword -->

    The this keyword in JavaScript refers to the context in which
    the function is executed. It can be dynamic, meaning it can change
    depending on how and where a function is called

    Arrow Functions -->

    Arrow functions, introduced in ES6, behave differently with respect
    to this. They do not have their own this context. Instead, they inherit
    this from the surrounding (lexical) scope at the time they are defined.
    This means that the value of this inside an arrow function is fixed
    and doesn't change regardless of how or where the function is invoked

    Use Case in Callbacks --> Arrow functions are particularly useful in
    situations where you want to ensure that this is consistent with the
    surrounding context, like in callbacks
*/

console.clear()
console.log("This Keyword -->")
console.log()

let name = 'Tokyo'

const obj =
{
    name: 'Seoul',
    greet: function() {
        console.log(this.name)
    }
}

obj.greet() // Logs 'Seoul', as `this` refers to `obj`

console.log()
console.log("Arrow Function -->")
console.log()

const obj2 =
{
    name: 'Incheon',
    regularFunction: function()
    {
        console.log(this.name) // 'Incheon'
    },
    arrowFunction: () => {
        console.log(this.name) // `this` is inherited from the outer scope, often the global object
    }
}

obj2.regularFunction()   // Logs 'Incheon'
obj2.arrowFunction()     // Logs undefined (or `window.name` in a browser)

/*
    In the example above, regularFunction correctly logs the name from obj,
    while arrowFunction may log undefined because this in an arrow function
    refers to the context in which the function was defined (outside obj),
    not where it is called
*/

console.log()
console.log("Callback -->")
console.log()

function Timer()
{
    this.seconds = 0

    setInterval(() =>
        {
            this.seconds++
            console.log(this.seconds)
        }, 1000)
}

const timer = new Timer() // Logs 1, 2, 3,... every second

/*
    The Timer Function -->

    this.seconds = 0:
    When you create a new instance of Timer, this refers to that specific instance.
    this.seconds = 0 initializes a property called seconds on the Timer instance and sets it to 0
    
    setInterval():
    setInterval is a built-in JavaScript function that repeatedly executes a piece of code
    at a fixed interval (in this case, every 1000 milliseconds or 1 second).
    Inside setInterval, we define an arrow function that will run every second.

    Arrow Function:
    The arrow function inside setInterval increments the seconds property of the Timer instance (this.seconds++)
    Then it logs the current value of seconds to the console
*/