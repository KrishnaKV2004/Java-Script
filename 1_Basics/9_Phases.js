//  Execution Phases -->

/*
    !   REFER TO --> 9_Phases.png

    ~   Global Execution Context -->

    Memory Creation Phase (Global Context) -->

    Before executing the code, JavaScript allocates memory space for variables
    and functions.
    In this phase, variables are initialized with undefined, and functions
    are stored in memory with their definitions.
    Example from the diagram:
    val1 --> undefined
    val2 --> undefined
    add --> function definition
    result1 --> undefined
    result2 --> undefined

    Execution Phase (Global Context) -->

    After memory is set up, the code is executed line by line.
    Variables are assigned values, and function definitions are ready to
    be invoked.
    Example from the diagram:
    val1 is set to 10
    val2 is set to 20
    The add function is ready to be called.

    ~   Function Execution Context -->

    Memory Creation Phase (Function Context) -->

    When a function is invoked, a new execution context is created
    specificallyfor that function.
    Inside this context, memory is allocated for the function's parameters
    and any variables declared inside the function.
    Initially, parameters and local variables are set to undefined.
    Example from the diagram:
    num1 --> undefined
    num2 --> undefined
    total --> undefined

    Execution Phase (Function Context) -->

    The function’s code is executed, and variables are assigned their
    actual values.
    The parameters (num1 and num2) are assigned the values passed during
    the function call.
    Local variables are computed based on the function's logic.
    Example from the diagram:
    num1 is assigned 10 and num2 is assigned 20.
    total is calculated as 30.

    Return and Deletion -->

    After the function execution is complete, the function returns a value
    (if any).
    The execution context for the function is then removed (or deleted),
    and control returns to the global execution context.
    Example:
    The add function returns 30, and then its context is deleted.

    ~   Final Output -->

    Once all the code has executed, including all function calls,
    the final results are stored in the respective variables.
    Example from the diagram:
    result1 and result2 store the values returned by the function calls
*/