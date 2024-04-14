//  Operations In JavaScript ---->

console.clear()
console.log("Opeartions -->")
console.log()

//  Make the number negative

let value = 27
let negValue = -value
console.log(value)      //  Output --> 27
console.log(negValue)   //  Output --> -27

console.log()

//  Let's do that on Boolean

let car1 = false
car1 = -car1
console.log(car1)    //  Output --> -0

let car2 = true
car2 = -car2
console.log(car2)    //  Output --> -1

/*
    Reason -->

    The value false/true were first converted into number implicitly
    and have values 0 and 1 respectively and then they are converted
    into negative number that's why output is -0 and -1
*/

//  What if we try to make a Nan negative ?

console.log()

let score = NaN
score = -score
console.log(score)   //  Output --> Nan

//  Obviously it will still remain Nan

console.log()

//  Let's go ahead -->

console.log("1" + "2")
console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log(1 + "2" + 2)

console.log()

//  Some more tricy conversions -->

console.log(+true)
console.log(+false)
console.log(+"")