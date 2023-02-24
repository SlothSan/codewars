/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15
*/

const sum = (...arguments) => {
  return arguments.reduce((accum, current) => accum + current, 0);
};

console.log(sum(5, 7, 9)); //21
