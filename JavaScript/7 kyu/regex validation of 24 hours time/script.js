/*
Write a regex to validate a 24 hours time string. See examples to figure out what you should check for:

Accepted: 01:00 - 1:00

Not accepted:

24:00

You should check for correct length and no spaces.
*/


const validateTime = (time) => /^([01]?\d|2[0-3]):[0-5]\d$/g.test(time);

console.log(validateTime("23:59")); //true
console.log(validateTime("1:60")); //false
