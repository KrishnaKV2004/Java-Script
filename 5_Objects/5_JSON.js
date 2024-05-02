//  JSON APIs in JavaScript ---->

/*
    JSON, or JavaScript Object Notation, is a lightweight data interchange
    format that is easy for humans to read and write and easy for machines
    to parse and generate. It's based on a subset of the JavaScript programming
    language and is commonly used for transmitting data between a server and
    a web application as an alternative to XML

    JSON is helpful in APIs because it's lightweight, easy to read and write,
    works across different programming languages, parses efficiently, is natively
    supported in web browsers, is widely standardized, and offers schema
    flexibility for evolving data structures

    We will come to APIs and JSON in deep later !
*/

/*
    Object Destructuring -->

    Object destructuring in JavaScript is a convenient way to extract multiple
    properties from an object and assign them to variables in a single statement.
    It provides a concise syntax for extracting values from objects and arrays

    Object destructuring is widely used in JavaScript, especially in scenarios
    like function parameters, API responses, and ES6 module imports.
    It improves code readability and reduces verbosity when working with
    objects and arrays

    Object destructuring in JavaScript is related to JSON in the sense that JSON
    data often represents objects with key-value pairs. When you receive JSON data
    from an API, you typically parse it into JavaScript objects, which you can
    then destructure to extract specific values


*/

console.clear()
console.log("Object Destructuring -->")
console.log()

let cars =
{
    name : 'Pagani Huayra',
    power : '900 HP',
    torque : '1000 NM',
    price : '$ 2500000'
}

const {name, power, torque, price} = cars

/*
    Now instead of accessing object properties by writing cars.name,
    we can simply access it by writing just name !
*/

console.log(cars)
console.log()
console.log("Properties -->\n")
console.log(`Name --> ${name}`)
console.log(`Power --> ${power}`)
console.log(`Torque --> ${torque}`)
console.log(`Price --> ${price}`)
console.log()

//  Object Destructuring in Nested Objects -->

const person =
{
    pname : 'Mitsuha',
    age : 20,
    address :
    {
      city : 'Tokyo',
      country : 'Japan'
    }
}
  
const {pname, age, address : {city, country}, pin = '100-0004'} = person

//  pin = '100-0004' adds pin property with value

console.log("Nested Objects -->\n")
console.log(person)
console.log()
console.log("Properties -->\n")
console.log(`Name --> ${pname}`)
console.log(`Age --> ${age}`)
console.log(`City --> ${city}`)
console.log(`Country --> ${country}`)
console.log(`Pin --> ${pin}`)