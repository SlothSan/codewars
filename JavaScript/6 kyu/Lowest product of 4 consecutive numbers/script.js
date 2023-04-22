/*
Create a function that returns the lowest product of 4 consecutive digits in a number given as a string.

This should only work if the number has 4 digits or more. If not, return "Number is too small".

Example
lowestProduct("123456789") --> 24 (1x2x3x4)
lowestProduct("35") --> "Number is too small"
*/

const lowestProduct = (input) => {
  if (input.length < 4) return "Number is too small";
  let arr = [];
  for (let x = 0; x < input.length - 3; x++) {
    arr.push(
      input
        .slice(x, x + 4)
        .split("")
        .map((a) => +a)
        .reduce((a, b) => a * b, 1)
    );
  }
  return Math.min(...arr);
};

console.log(lowestProduct("123456789")); //24
