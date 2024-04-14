//  Stack and Heap In JavaScript ---->

/*
    Stack -->

    In JavaScript, the execution context, including variables and function calls,
    is managed using a stack-like structure called the "call stack".
    When a function is called, a new frame is pushed onto the call stack to store
    its local variables and parameters. When the function returns, its frame is
    popped off the stack.

    Heap -->
    JavaScript objects are allocated memory on the heap, which is a region of
    memory where dynamically allocated memory resides. When you create an object,
    space for it is allocated on the heap, and a reference to that object is
    stored in the stack or elsewhere.
*/

//  Go through the Excalidraw file to understand the code below -->

//  Primitve Data type will go to stack !

    let name = "Krishna Verma"
    let age = 20

//  Object will be allocated in Heap and reference is passed in stack !

    let user1 =
    {
        name : "Krishna Verma",
        age : 27,
        dob : "Feb 27, 2004"
    }

    let user2 = user1   //  user1's reference will be passed to user2