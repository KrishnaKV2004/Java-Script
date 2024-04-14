//  String Templates in JavaScript ---->

/*
    Template String provide an easy way to interpolate variables and expressions
    into strings. The method is called string interpolation.
*/

console.clear()
console.log("String Interpolation -->")
console.log()

//  Back Ticks Syntax -->

let name =  `Krishna Verma`

//  Quotes Inside Strings -->

let quote = `"Embrace the glorious mess that you are"`

//  Multiline Strings -->

let todos =
`HTML
CSS
JAVASCRIPT`

console.log(todos)
console.log()

/*
    Interpolation -->

    Template String provide an easy way to interpolate
    variables and expressions into strings.
    The method is called string interpolation.

    Syntax -->

    ${...}
*/

//  Variable Substitution -->

console.log(`Hello I am ${name} and today's quote is ${quote}`)

//  Expression Substitution -->

console.log()
console.log("Expression Substitution -->")
console.log()

let price = 10
let VAT = 0.25
let total = `Total --> ${(price * (1 + VAT)).toFixed(2)}`

console.log(price)
console.log(VAT)
console.log(total)
console.log()

/*
    HTML Templates -->

    let header = "Template Strings"
    let tags = ["Template strings", "JavaScript", "ES6"]

    let html = `<h2>${header}</h2><ul>`

    for (const x of tags)
    {
    html += `<li>${x}</li>`
    }

    html += `</ul>`
*/