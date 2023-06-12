/*
Given a number return the closest number to it that is divisible by 10.

Example input:

22
25
37
Expected output:

20
30
40
*/

const closestMultiple10 = (num) =>
  num % 10 >= 5 ? num - (num % 10) + 10 : num - (num % 10);

console.log(closestMultiple10(24)); //20
