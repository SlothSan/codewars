/*
Principal Diagonal -- The principal diagonal in a matrix identifies those elements of the matrix running from North-West to South-East.

Secondary Diagonal -- the secondary diagonal of a matrix identifies those elements of the matrix running from North-East to South-West.

For example:

matrix:             [1, 2, 3]
                    [4, 5, 6]
                    [7, 8, 9]

principal diagonal: [1, 5, 9]
secondary diagonal: [3, 5, 7]
Task
Your task is to find which diagonal is "larger": which diagonal has a bigger sum of their elements.

If the principal diagonal is larger, return "Principal Diagonal win!"
If the secondary diagonal is larger, return "Secondary Diagonal win!"
If they are equal, return "Draw!"
Note: You will always receive matrices of the same dimension.
*/

const diagonal = (matrix) => {
  let principalDiagonal = 0,
    secondaryDiagonal = 0;
  for (let i = 0; i < matrix.length; i++) {
    principalDiagonal += matrix[i][i];
    secondaryDiagonal += matrix[i][matrix.length - 1 - i];
  }
  return principalDiagonal > secondaryDiagonal
    ? "Principal Diagonal win!"
    : secondaryDiagonal > principalDiagonal
    ? "Secondary Diagonal win!"
    : "Draw!";
};

console.log(
  diagonal([
    [2, 2, 2],
    [4, 2, 6],
    [1, 8, 2],
  ])
); //Principal Diagonal win!
