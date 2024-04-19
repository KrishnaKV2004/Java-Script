//  Objects In JavaScript ---->

/*
    In JavaScript, objects are fundamental data structures that allow
    you to store collections of key-value pairs. An object can be thought
    of as a collection of properties, where each property has a key
    (also known as a name or identifier) and a value

    Example -->

    In real life, a car is an object.

    A car has properties like weight and color, and methods like start and stop :

    Object	            Properties	            Methods
	
                        car.name = Lexus        car.start()   
                        car.model = IS 500      car.drive()
    CAR                 car.weight = 850kg      car.brake()
                        car.power = 600 HP      car.reverse()
                        car.color = White	    car.stop()

    All cars have the same properties, but the property values differ from car to car
    All cars have the same methods, but the methods are performed at different times
*/

console.clear()
console.log("Objects -->")
console.log()

/*
    Two ways of declaring objects -->

    • As Literals
    • As Constructors
      When we declare object from constructor, it is a singleton object
      Singleton object is a design pattern that restricts the instantiation
      of a class to a single instance and provides a global point of access
      to that instance. This pattern ensures that a class has only one
      instance and provides a way to access it from any other part
      of the application

    For now don't get deep into Singleton objects, we'll deal with it later !
*/

//  Let's declare an Object Literal -->

const car1 =
{
    name : 'Lexus',
    model : 'IS 500',
    power : '600 HP',
    year : '2024',
    colour : 'Grey',
    modded : true,
    "engine options" : ['V6','V8']
}

//  Accessing the Object -->

console.log(car1)

/*
    Accessing Object Properties -->

    • By --> objectName.propertyName
    • By --> objectName["propertyName"]

    We prefer objectName["propertyName"]
    because we can't access properties which have space in their names
    such as "engine options" with objectName.propertyName !
*/

console.log()
console.log("Object Properties -->")
console.log()

console.log("Name --> " + car1.name)
console.log("Model --> " + car1.model)
console.log("Power --> " + car1.power)
console.log("Engine Options --> " + car1["engine options"])

/*
    Symbol as Object key -->

    Declaration of Symbol -->
    const symb = Symbol("Symbol name")

    object =
    {
        [symb] : "Symbol"
    }

    Access --> object[symb]
    console.log(object[symb])
*/

const symb = Symbol()

let car2 =
{
    carName : 'Pagani Huayra',
    horsePower : '900 HP',
    [symb] : 'Pagani'
}

console.log()
console.log("Car 2 -->")
console.log()

console.log(car2)
console.log()
console.log(`Symbol --> ${car2[symb]}`)