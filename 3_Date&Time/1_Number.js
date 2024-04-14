//  Numbers In JavaScript ---->

console.clear()
console.log("Numbers In JavaScript -->")
console.log()

const player1_score = 270000
console.log(player1_score)  //  Output --> 27

//  When we explicitly define a Number it will show its type

const player2_score = new Number(25.4)
console.log(player2_score)  //  Output --> [Number : 25]

//  Methods For Numbers -->

console.log()
console.log("Methods For Numbers -->")
console.log()

console.log(player1_score.toString())           //  Converts to String
console.log(typeof(player1_score.toString()))
console.log(player1_score.toLocaleString())     //  Converts to Locale String
console.log(typeof(player1_score.toLocaleString()))
console.log(player2_score.toFixed(2))           //  Converts to Fixed decimal places
console.log(typeof(player2_score.toFixed()))
console.log(player2_score.toPrecision(5))       //  Converts to Precision string
console.log(typeof(player2_score.toPrecision()))
console.log(player2_score.toExponential(2))     //  Converts to Rounded off string
console.log(typeof(player2_score.toExponential()))

/*
    ~ If no parameter is given number will not be rounded !
    ~ Locale String provides commas as per US standars by default
    ~ To Change the standard parameter is passed
    ~ Example for India --> toLocaleString('en-IN')
*/    

console.log()

console.log(player2_score.valueOf())            //  Returns Value as Number
console.log(typeof(player2_score.valueOf()))

//  You can try more Methods from documentation but these are sufficient !