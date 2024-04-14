//  Date And Time In JavaScript ---->

/*
    Date -->

    JavaScript Date objects represent a single moment in time in a
    platform-independent format. Date objects encapsulate an integral
    number that represents milliseconds since the midnight at the beginning
    of January 1, 1970, UTC (the epoch).
*/

console.clear()
console.log("Date And Time -->")
console.log()

let myDate = new Date()

console.log(myDate)
console.log(typeof(myDate))

console.log()
console.log("Conversions -->")
console.log()

//  Conversions -->

console.log(`Date In String --> ${myDate.toString()}`)
console.log(`Date In DateString --> ${myDate.toDateString()}`)
console.log(`Date In LocaleString --> ${myDate.toLocaleString()}`)
console.log(`Date In LocaleDateString --> ${myDate.toLocaleDateString()}`)
console.log(`Date In ISOS String --> ${myDate.toISOString()}`)
console.log(`Date In Time String --> ${myDate.toTimeString()}`)
console.log(`Date In UTC String --> ${myDate.toUTCString()}`)

//  Custom Dates -->

console.log()
console.log("Custom Dates -->")
console.log()

//  ~ Months in JavaScript starts from 0

let myCustomDate = new Date(2024,1,27)
console.log(myCustomDate)
console.log(myCustomDate.toDateString())

/*
    In JavaScript, the Date object can be instantiated with several
    different parameters. Here are the most common ways to create a
    new Date object:
*/

//  No Parameters: Creates a Date object for the current date and time -->

let currentDate = new Date()

/*
    Milliseconds Since Epoch --> Pass the number of milliseconds since
    January 1, 1970, 00:00:00 UTC.
*/

let dateFromMilliseconds = new Date(1615286400000);

/*
    Date String --> Pass a date string that can be recognized by the
    Date.parse() method.
*/

let dateFromString = new Date("2021-03-09T12:00:00Z");

//  Year, Month (0-indexed), Day, Hour, Minute, Second, Millisecond -->

/*
    Ways of declaring a Date in JS -->

    new Date()
    new Date(date string)

    new Date(year,month)
    new Date(year,month,day)
    new Date(year,month,day,hours)
    new Date(year,month,day,hours,minutes)
    new Date(year,month,day,hours,minutes,seconds)
    new Date(year,month,day,hours,minutes,seconds,ms)

    new Date(milliseconds)
*/

let specificDate = new Date(2024,1,27,5,0)

/*
    The new Date() Constructor -->

    In JavaScript, date objects are created with new Date().
    New Date() returns a date object with the current date and time.
*/

console.log()
console.log("Date Get-Set Methods -->")
console.log()

let currDate = new Date("2024-03-27")

/*
    Date Get Methods -->

    getFullYear()	        Get year as a four digit number (yyyy)
    getMonth()	            Get month as a number (0-11)
    getDate()	            Get day as a number (1-31)
    getDay()	            Get weekday as a number (0-6)
    getHours()	            Get hour (0-23)
    getMinutes()	        Get minute (0-59)
    getSeconds()	        Get second (0-59)
    getMilliseconds()	    Get millisecond (0-999)
    getTime()	            Get time (milliseconds since January 1, 1970)

    ~ Try these methods own your own and check out the result !
*/

//  Example -->

console.log("Date --> " + currDate.getDate())
console.log("Month --> " + currDate.getMonth())
console.log("Year --> " + currDate.getFullYear())

/*
    Date Set Methods -->

    Set Date methods let you set date values
    (years, months, days, hours, minutes, seconds, milliseconds)
    for a Date Object.

    Set Methods -->

    setDate()	            Set the day as a number (1-31)
    setFullYear()	        Set the year (optionally month and day)
    setHours()	            Set the hour (0-23)
    setMilliseconds()	    Set the milliseconds (0-999)
    setMinutes()	        Set the minutes (0-59)
    setMonth()	            Set the month (0-11)
    setSeconds()	        Set the seconds (0-59)
    setTime()	            Set the time (milliseconds since January 1, 1970)
*/

console.log()
currDate.setFullYear(2004)
console.log("New Year --> " + currDate.getFullYear())

//  Try out more Setter Methods by yourself !