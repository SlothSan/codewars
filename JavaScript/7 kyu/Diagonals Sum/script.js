/*
Create a function that receives a (square) matrix and calculates the sum of both diagonals (main and secondary)

Matrix = array of n length whose elements are n length arrays of integers.

3x3 example:

diagonals( [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
] ); 

returns -> 30 // 1 + 5 + 9 + 3 + 5 + 7
*/

const sum = (matrix) => {
  const n = matrix.length;
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += matrix[i][i] + matrix[i][n - 1 - i];
  }
  return sum;
};

console.log(
  sum([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); //30
