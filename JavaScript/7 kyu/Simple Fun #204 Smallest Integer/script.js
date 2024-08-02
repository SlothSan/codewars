/* 
Task
You're given a two-dimensional array of integers matrix. Your task is to determine the smallest non-negative integer that is not present in this array.

Input/Output
[input] 2D integer array matrix
A non-empty rectangular matrix.

1 ≤ matrix.length ≤ 10

1 ≤ matrix[0].length ≤ 10

[output] an integer
The smallest non-negative integer that is not present in matrix.

Example
For

  matrix = [  [0, 2],  [5, 1]] the result should be 3

0,1,2,(3)...5
*/

const smallestInteger = (matrix) => {
  const flattened = matrix.flat();
  const presentIntegers = new Set(flattened);
  let smallestMissing = 0;
  while (presentIntegers.has(smallestMissing)) {
    smallestMissing++;
  }

  return smallestMissing;
};

console.log(
  smallestInteger([
    [4, 5, 3, -4, 3, 8],
    [2, 0, 6, 5, 4, 9],
    [7, 5, 6, 8, 2, 6],
    [1, 4, 7, 8, 9, 11],
    [1, 3, 10, 5, 5, 1],
    [12, 7, 3, 4, 4, 3],
  ])
); //13
