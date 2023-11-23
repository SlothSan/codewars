/*
You received an array with two strings. Create a function that will return their product as a string. E.g.

arrMultiply(['9','6']) should return '54'
*/

const arrMultiply = (arr) => "" + arr.reduce((acc, curr) => acc * +curr, 1);

console.log(arrMultiply(["10", "5"])); //50
