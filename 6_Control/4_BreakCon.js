//  Break And Continue In JavaScript -->

/*
    Break & Continue -->

    Break and Continue are control flow statements used within loops
    to alter the normal flow of execution

    break -->

    The break statement is used to terminate the loop immediately
    when it's encountered, regardless of the loop condition
    It's commonly used to exit a loop prematurely if a certain condition is met
    When used in nested loops, break exits only the innermost loop

    continue -->

    The continue statement is used to skip the current iteration of the
    loop and proceed to the next iteration
    It's commonly used to skip certain values or conditions within a loop
    When encountered, continue immediately jumps to the next iteration,
    skipping any code below it in the loop's block
*/

console.clear()
console.log("Break & Continue -->")
console.log()

console.log("Break -->")
console.log()

for (let i = 0; i < 5; i++)
{
    if (i === 3)
    {
      break // Exit the loop when i reaches 3
    }
    console.log(i)
}   // Output --> 0 1 2

console.log()
console.log("Continue -->")
console.log()

for (let i = 0; i < 5; i++)
{
    if (i === 2)
    {
      continue // Skip the iteration when i is 2
    }
    console.log(i);
} // Output --> 0 1 3 4  