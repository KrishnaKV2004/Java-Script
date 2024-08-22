//  Operators In JavaScript

/*
    Operators are used to perform different
    types of mathematical and logical computations.

    Types of JavaScript Operators -->

    • Arithmetic Operators
    • Assignment Operators
    • Comparison Operators
    • String Operators
    • Logical Operators
    • Bitwise Operators
    • Ternary Operators
    • Type Operators
*/

    console.clear()
    console.log("Operators In JS -->")
    console.log()

/*  Arithmetic Opeartors -->

    +    |   Addition
    -    |   Subtraction
    *    |   Multiplication
    /    |   Division
    **   |   Exponential
    %    |   Remainder
*/

    //  Increment Decrement Operators -->

    console.log("Increment/Decrement -->")
    console.log()

    let count = 0
    count = count++                 //  Post-Increment Operator assigns value after increment
    ++count                 //  Pre-Increment Operator assigns value after increment
    console.log(count)
    count = --count                 //  Pre-Decrement Operator assigns value after increment
    count--                 //  Post-Decrement Operator assigns value after increment
    console.log(count)

/*  Assignment Operators -->

    =	 |   x = y	  |   x = y
    +=	 |   x += y	  |   x = x + y
    -=	 |   x -= y	  |   x = x - y
    *=	 |   x *= y	  |   x = x * y
    /=	 |   x /= y	  |   x = x / y
    %=	 |   x %= y	  |   x = x % y
    **=	 |   x **= y  |	 x = x ** y
*/

/*  Comparision Opeartor -->

    ==	   |   equal to
    ===	   |   equal value and equal type
    !=	   |   not equal
    !==	   |   not equal value or not equal type
    >	   |   greater than
    <	   |   less than
    >=	   |   greater than or equal to
    <=	   |   less than or equal to
    ?	   |   ternary operator
*/

//  String Operators -->

    console.log();
    console.log("String Operators -->")
    console.log();

    //  Comparision -->

    let text1 = "A";
    let text2 = "B";
    let result = text1 < text2;
    console.log(result)

    let num1 = "20";
    let num2 = "5";
    let res = num1 < num2;
    console.log(res)

    //  Addition -->

    text1 = "John";
    text2 = "Doe";
    text3 = text1 + " " + text2;
    console.log(text3)

    text1 = "What a very ";
    text1 += "nice day";
    console.log(text1)

    //  Adding strings and numbers

    console.log()

    let y = "5" + 5;
    let z = "Hello" + 5;
    console.log(y)
    console.log(z)

/* 
    Logical Operators -->

    &&	 |   logical and
    ||	 |   logical or
    !	 |   logical not

    Type Operators -->

    typeof	      |    Returns the type of a variable
    instanceof	  |    Returns true if an object is an instance of an object type

    Bitwise Operators -->
    
    Operator	Description	     Example	  Same as	     Result  	Decimal

    &	           AND	          5 & 1	    0101 & 0001	      0001	       1
    |	           OR	          5 | 1	    0101 | 0001	      0101	       5
    ~	           NOT	           ~ 5	       ~0101	      1010	       10
    ^	           XOR	          5 ^ 1	    0101 ^ 0001	      0100	       4
    <<	        left shift	      5 << 1	0101 << 1	      1010	       10
    >>	       right shift	      5 >> 1	0101 >> 1	      0010	       2
    >>>	   unsigned right shift	  5 >>> 1	0101 >>> 1	      0010	       2
*/

//  Ternary Opeartor -->

    console.log()
    console.log("Ternary Operator -->")
    console.log()

    let a = 20
    let b = 27

    //  Syntax --> <condition> ? if true : if false

    a>b ? console.log(a) : console.log(b)

    /*
        Nullish Coalescing Operator (??) -->

        The nullish coalescing operator (??) is a logical operator introduced
        in JavaScript as part of ECMAScript 2020 (ES11). It provides a
        convenient way to handle default values for cases where a variable is
        either null or undefined

        variable = value1 ?? value2

        If value1 is not null or undefined, it's returned
        If value1 is null or undefined, value2 is returned
        
        The nullish coalescing operator differs from the logical OR (||) operator
        in how it handles "falsy" values other than null and undefined.
        The ?? operator only checks for null or undefined, whereas the || operator
        checks for any "falsy" value (null, undefined, 0, "", etc)
    */

    let car
    car = null ?? "GTR"

    console.log()
    console.log("Null Coalescing Operator -->")
    console.log(car)

    //  Try out more operators on your own !