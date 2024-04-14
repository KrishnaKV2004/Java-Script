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

/*
    Time Stamps -->

    In JavaScript, you can create time stamps using the Date object.
    The Date object provides various methods to retrieve the current
    date and time, which you can format into a time stamp.
*/

console.log()
console.log("Time Stamps -->")
console.log()

let timeStamp = Date.now()      //  Current Date in Milliseconds
console.log(timeStamp)
console.log()

//  Comparing two Dates -->

let date1 = Date.now()
let date2 = new Date("2024-03-27")

//  We have Date 1 in milliseconds, let's get Date 2 also in milliseconds

date2 = date2.getTime()

console.log(date1)
console.log(date2)

//  Now we have both dates in milliseconds

//  To convert it in seconds from milliseconds

console.log()
console.log("In Seconds --> " + Math.floor(Date.now()/1000))

/*
    LocaleString Parameters -->

    The toLocaleString() method of the Date object in JavaScript
    allows you to format a date and time value according to the
    locale conventions. This method can take up to three arguments:

    locales: Specifies a string with a BCP 47 language tag, or an
    array of such strings, indicating the locale(s) to use.
    If you pass an array, the best-matching locale will be used.
    If this argument is omitted or undefined, the locale of the system is used.

    options: An optional object that defines some properties of the output string:

    timeZone:       Specifies the time zone to use.
                    The default is the runtime's default time zone.
    weekday:        Specifies whether to include the weekday (e.g., "Monday").
                    Possible values are 'narrow', 'short', 'long'.
    year:           Specifies whether to include the year.
                    Possible values are 'numeric', '2-digit'.
    month:          Specifies whether to include the month.
                    Possible values are 'numeric', '2-digit', 'narrow', 'short', 'long'.
    day:            Specifies whether to include the day.
                    Possible values are 'numeric', '2-digit'.
    hour:           Specifies whether to include the hour.
                    Possible values are 'numeric', '2-digit'.
    minute:         Specifies whether to include the minute.
                    Possible values are 'numeric', '2-digit'.
    second:         Specifies whether to include the second.
                    Possible values are 'numeric', '2-digit'.
    era:            Specifies whether to include the era (e.g., "AD").
                    Possible values are 'narrow', 'short', 'long'.
    formatMatcher:  Specifies how the function should match the locale to the options.
                    Possible values are 'basic' and 'best fit'.
    options:        Another optional object that defines properties for the date part:

    weekday:        Specifies whether to include the weekday.
    year:           Specifies whether to include the year.
    month:          Specifies whether to include the month.
    day:            Specifies whether to include the day.
*/

console.log()
console.log("Locale String Parameters -->")
console.log()

const date = new Date()
const options =
{
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC'
}

const localeString = date.toLocaleString('en-US', options)
console.log(localeString)