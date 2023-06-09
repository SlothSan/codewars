/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.

Example
123  => 6
223  => 7
1337 => 14
*/

const getSumOfDigits = (integer) =>
  String(integer)
    .split("")
    .reduce((acc, curr) => acc + Number(curr), 0);

console.log(getSumOfDigits(14123)); //11
