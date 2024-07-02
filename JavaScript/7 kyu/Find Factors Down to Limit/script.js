/* 
In this Kata you have to find the factors of integer down to the limit including the limiting number. There will be no negative numbers. Return the result as an array of numbers in ascending order.

If the limit is more than the integer, return an empty list

As a challenge, see if you can do it in one line
*/

const factors = (integer, limit) =>
  Array.from({ length: integer - limit + 1 }, (_, i) => integer - i)
    .filter((i) => integer % i === 0)
    .reverse();

console.log(factors(30, 2));
/*
[
   2,  3,  5, 6,
  10, 15, 30
]
*/
