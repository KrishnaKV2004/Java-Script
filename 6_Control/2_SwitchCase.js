//  Switch Case In JavaScript ---->

/*
    In JavaScript, the switch statement is used to perform different actions
    based on different conditions. It evaluates an expression, matches the
    expression's value to a case clause, and executes the statements associated
    with that case

    Syntax -->

    switch(expression)
    {
        case value1:
            // code block
            break
        case value2:
            // code block
            break
        ...
        default:
            // code block
    }

    expression -->  The expression whose value is being compared in each case
                    clause
    case valueN --> This is the value that will be compared to the expression.
                    If it matches, the associated code block will be executed.
    break -->       Terminates the switch statement. If omitted, execution will
                    continue with the next case.
    default -->     An optional case. If none of the cases match, the code within
                    the default block will be executed.
*/

console.clear()
console.log("Switch Case -->")
console.log()

//  Example -->

var fruit = "Apple"
console.log(fruit)

switch(fruit)
{
  case "Banana":
    console.log("Banana Is Yellow")
    break
  case "Apple":
    console.log("Apple Is Red")
    break
  case "Orange":
    console.log("Orange Is Orange")
    break
  default:
    console.log("I Have No Idea What This Fruit Is !")
}