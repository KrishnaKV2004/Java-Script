//  If Else in JavaScript -->

/*
    In JavaScript, the if...else statement is used for conditional
    execution of code blocks based on certain conditions

    Syntax ->

    if (condition)
    {
        // code to be executed if condition is true
    }
    else
    {
        // code to be executed if condition is false
    }

    The if statement checks a condition inside the parentheses
    If the condition evaluates to true, the code block immediately
    following it is executed
    If the condition evaluates to false, the code block following the else
    keyword is executed
*/

console.clear()
console.log("If Else -->")
console.log()

let num = 10

if (num > 0)
{
  console.log("Number is Positive")
}
else
{
  console.log("Number is Non-Positive")
}

/*
    Multiple Conditions -->

    if (condition1)
    {
      // code to be executed if condition1 is true
    }
    else if (condition2)
    {
      // code to be executed if condition1 is false and condition2 is true
    }
    else
    {
      // code to be executed if both condition1 and condition2 are false
    }
*/

if (num > 0)
{
  if (num % 2 === 0)
  {
    console.log("Number is Positive and Even")
  }
  else
  {
    console.log("Number is Positive and Odd")
  }
}
else if (num === 0)
{
  console.log("Number is Zero")
}
else
{
  console.log("Number is Negative")
}

//  Nested If Else -->

num = 27

if (num > 0)
{
  if (num % 2 === 0)
  {
    console.log("Number is positive and even")
  }
  else
  {
    console.log("Number is positive and odd")
  }
}
else if (num === 0)
{
  console.log("Number is zero")
}
else
{
  console.log("Number is negative");
}

/*
    Ternary Operator (Conditional Operator) -->

    JavaScript also provides a shorthand version of if...else using the
    ternary operator (? :) It's often used for simple conditional expressions

    condition ? expressionIfTrue : expressionIfFalse
*/

num = 10
let result = num > 0 ? "Positive" : "Non-Positive"
console.log(result)

/*
    In JavaScript, values are considered "truthy" if they coerce to true
    when evaluated in a Boolean context, and "falsy" if they coerce to false

    Falsy Values -->

    false       The boolean value false itself.
    0           The number zero.
    -0          Negative zero.
    0n          BigInt zero.
    ""          An empty string.
    null        Represents the absence of any value or object.
    undefined   Represents an uninitialized value.
    NaN         Which arises from an operation that cannot produce
                a meaningfulresult

    Thruthy Values -->

    true        The boolean value true itself.
    Numbers     Other than 0 (positive or negative).
    Strings     With at least one character.
    Arrays, objects, and functions (even if empty).
*/