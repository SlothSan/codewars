/*
There exist two zeroes: +0 (or just 0) and -0.

Write a function that returns true if the input number is -0 and false otherwise (True and False for Python).

In JavaScript / TypeScript / Coffeescript the input will be a number.

In Python / Java / C / NASM / Haskell / the input will be a float.
*/

const isNegativeZero = (n) => Object.is(n, -0);

console.log(isNegativeZero(-0)) //true
console.log(isNegativeZero(+0)) //false