/*
Task
Given a matrix, find its submatrix obtained by deleting the specified rows and emptying the specified columns.

Input/Output
[input] 2D integer array matrix

2-dimensional array of integers.

1 ≤ matrix.length ≤ 10,

1 ≤ matrix[0].length ≤ 10,

0 ≤ matrix[i][j] ≤ 9.

[input] integer array rowsToDelete

Array of indices (0-based) of rows to be deleted.

0 ≤ rowsToDelete.length ≤ 5,

0 ≤ rowsToDelete[i] < matrix.length.

[input] integer array columnsToDelete

Array of indices (0-based) of columns to be deleted.

0 ≤ columnsToDelete.length ≤ 5,

0 ≤ columnsToDelete[i] < matrix[0].length.

[output] 2D integer array

Example
For

matrix = [ [1, 0, 0, 2]
         , [0, 5, 0, 1]
         , [0, 0, 3, 5]
         ]
rowsToDelete = [1]
columnsToDelete = [0, 2]
the output should be

[ [0, 2]
, [0, 5]
]
*/

const constructSubmatrix = (matrix, rowsToDelete, columnsToDelete) => {
  const rows = new Set(rowsToDelete);
  const columns = new Set(columnsToDelete);

  return matrix
    .filter((_, rowIndex) => !rows.has(rowIndex))
    .map((row) => row.filter((_, colIndex) => !columns.has(colIndex)));
};

console.log(
  constructSubmatrix(
    [
      [1, 0, 0, 2],
      [0, 5, 0, 1],
      [0, 0, 3, 5],
    ],
    [1],
    [0, 2]
  )
);

/*
[ [ 0, 2 ], [ 0, 5 ] ]
*/
