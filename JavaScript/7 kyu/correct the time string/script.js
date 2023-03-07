/*
A new task for you!

You have to create a method, that corrects a given time string.
There was a problem in addition, so many of the time strings are broken.
Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.
Examples
"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  
If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/

const timeCorrect = (timestring) => {
  if (!timestring) return timestring;
  if (!/^(?:(?:([0-9]?\d|2[0-9]):)?([0-9]?\d):)?([0-9]?\d)$/g.test(timestring))
    return null;
  timestring = timestring.split(":");
  let seconds = +timestring[0] * 60 * 60 + +timestring[1] * 60 + +timestring[2];
  let date = new Date(seconds * 1000).toISOString().substring(11, 19);
  return date;
};

console.log(timeCorrect("52:01:01")); //04:01:01
