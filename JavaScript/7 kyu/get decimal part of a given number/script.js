/*
Write a function that returns only the decimal part of the given number.

You only have to handle valid numbers, not Infinity, NaN, or similar. Always return a positive decimal part.

Examples
getDecimal(2.4)  === 0.4
getDecimal(-0.2) === 0.2
*/

const getDecimal = (n) => Math.abs(n % 1);

console.log(getDecimal(1.9)); //0.8999999999999999
