//  Nesting In Objects In JavaScript ---->

/*
    Nesting objects in JavaScript refers to the practice of placing objects
    within other objects, creating a hierarchical structure.
    This is a fundamental concept in JavaScript and is commonly used to
    organize and manage data in a structured manner
*/

console.clear()
console.log("Nesting Of Objects -->")
console.log()

//  Let's make a nested Object ->

let person =
{
    name: "Krishna Verma",
    age: 20,
    address:
    {
        city: "Dehradun",
        street: "Clement Town",
        zip: "248002"
    }
}

//  Accessing Properties -->

console.log(person)
console.log()
console.log(`Name --> ${person.name}`)
console.log(`Address --> ${person.address}`)
console.log(`City --> ${person.address.city}`)

/*
    Nesting objects can be useful for organizing related data,
    improving code readability, and facilitating data manipulation.
    You can access nested properties using dot notation
    (e.g., object.property.subproperty) or bracket notation
    (e.g., object['property']['subproperty'])
*/

// Creating a nested object using bracket notation -->

let car = {}

car['details'] =
{
    make: "Toyota",
    model: "Camry",
    year: 2020
}

// Accessing nested object properties using bracket notation -->

console.log()
console.log(`Car Object -->`)
console.log()
console.log(`Car Name --> ${car['details']['make']}`)  // Output --> Toyota
console.log(`Car Year --> ${car['details']['year']}`)  // Output --> 2020
console.log()

//  Merging Objects -->

const obj1 =
{
    1 : 'a',
    2 : 'b'
}

const obj2 =
{
    3 : 'c',
    4 : 'd'
}

const obj = {obj1, obj2}

console.log("Merging Objects -->")
console.log()
console.log(obj)

//  There is an issue with this snippet as Object is not merged correctly !

/*
    We can use two different methods to achieve our goal -->

    Using Object.assign() -->
    The Object.assign() method is used to copy the values of all enumerable
    own properties from one or more source objects to a target object.
    It returns the target object.
    In the code above, we use an empty object {} as the target object to
    merge obj1 and obj2.
    Object.assign() merges the properties of obj1 and obj2 into mergedObj.

    Using object spread syntax ({...}) -->
    The object spread syntax {...} allows you to create a new object by
    copying the properties from one or more source objects into the new object.
    In the code above, {...obj1, ...obj2} creates a new object by merging
    the properties of obj1 and obj2 into spreadObj.
*/

const obj3 = Object.assign({}, obj1, obj2)

console.log()
console.log("Object Assing -->\n")
console.log(obj3)

//  Using Spread Operator -->

obj3 = {...obj1, ...obj2}