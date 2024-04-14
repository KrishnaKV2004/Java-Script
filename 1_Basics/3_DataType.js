//  Data Types In JavaScript

/*
    Before coming to the data types
    let's understand about some key points
    "use strict"; //  Tells the engine that code will be treated as
    newer version to provide standards to new code
*/
/*
    What is A Data Type ?

    A data type is an attribute associated with a piece of data that tells
    a computer system how to interpret its value. Understanding data types
    ensures that data is collected in the preferred format and the value of
    each property is as expected.

    Primitive Data Types -->

    Primitive data types are the basic types that all other data types
    are built from. They are often limited to the data representations
    used by a specific processor, but most processors support a similar
    set of primitive data types. Primitive data types are immutable,
    store single values, do not have methods, cannot be shared, and have
    default values when not assigned.

    • String       |     String values
    • Number       |     Integer values with low range
    • BigInt       |     Integer values with high range
    • Boolean      |     True or False
    • Undefined    |     Undefined 
    • Null         |     Null object
    • Symbol       |     Unique Identifier       

    Object Data Types -->

    An object data type is a user-defined data type that contains a data
    structure and the functions and procedures needed to manipulate the data.
    Object data types are also known as non-primitive or reference data types.
    They use built-in and user-defined datatypes as building blocks to model
    the structure and behavior of data in applications.

    • Object    |   Key-Value pairs
    • Arrays    |   Collection of similar data types
*/

//  Examples -->

let name = "Krishna"
let age = 20
let isAdult = true
let city
let state = null
let car = Symbol('Huayra')
let cars = ["Porsche", "Nissan", "Pagani"]

//  Let's print the types of all variables with typeof -->

console.clear()
console.log("Data Types -->")
console.log()

//  typeof var is same as typeof(var)

console.log(typeof(name))
console.log(typeof(age))
console.log(typeof(isAdult))
console.log(typeof(city))
console.log(typeof(state))
console.log(typeof(car))
console.log(typeof(cars))

//  Similarily we can make Object for this data

let person =
{
    name : "Krishna",
    age : 20,
    isAdult : true,
    city : "UK",
    state : "Dehradun",
    car : "Huayra"
}

console.log()
console.log("User Info -->")
console.log()
console.log(person)