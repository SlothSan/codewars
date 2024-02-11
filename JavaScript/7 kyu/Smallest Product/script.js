/*
Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

Example
input = [
  [1, 5],
  [2],
  [-1, -3]
]

result = 2
*/

const smallestProduct = (arr) =>
  Math.min(
    ...arr.map((current) => current.reduce((acc, curr) => acc * curr, 1))
  );

console.log(
  smallestProduct([
    [3, 2],
    [1, 2, 1],
    [7, 8],
  ])
);

//2
