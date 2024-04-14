//  Random Method in JavaScript ---->

/*
    Random Method -->

    In JavaScript, if you want to generate a random number,
    you can use the Math.random() method.
    This method returns a floating-point number
    between 0 (inclusive) and 1 (exclusive)

    How you can use Math.random() to generate a random number
    between a minimum and maximum value -->

    ~   Math.floor(Math.random() * (max - min + 1)) + min

    • Math.random() generates a random floating-point number
      between 0 (inclusive) and 1 (exclusive).
    • (max - min + 1) calculates the range of numbers
      between min and max, inclusive.
    • Math.floor() rounds down the floating-point number to the
      nearest integer, ensuring you get a whole number.
*/

// Let's make a program to generate a random number for our dice roll !

console.clear()
console.log("Dice Roll -->")
console.log()

//  Remember for dice roll we need a number between 1 and 6 including them !

let diceRoll = Math.floor(Math.random() * 6) + 1
console.log(`Your Dice Number is --> ${diceRoll}`)

/*
    • Math.random(): This generates a random floating-point number
      between 0 (inclusive) and 1 (exclusive).
    • Math.random() * 6: This scales the random number to a range
      between 0 (inclusive) and 6 (exclusive).
    • Math.floor(Math.random() * 6): This rounds down the scaled
      random number to the nearest integer, which can be any integer from 0 to 5.
    • Math.floor(Math.random() * 6) + 1: Finally, we add 1 to the result
      to shift the range to start from 1 instead of 0, resulting in a
      random integer between 1 and 6.

    ~ Now run this program a few times and see if it generates a random number
      for you between 1 and 6 including them !
*/