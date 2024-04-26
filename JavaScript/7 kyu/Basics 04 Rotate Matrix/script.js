/*
Your task is to rotate a matrix 90 degree to the left. The matrix is an array of integers with dimension n,m. So this kata checks some basics, it's not too difficult.

There's nothing more to explain, no tricks, no "bad cases";-). Perhaps you take a look at the testcases...

One easy example:

Input: {{-1, 4, 5},
        { 2, 3, 4}}

Output: {{ 5, 4},
         { 4, 3},
         {-1, 2}}
First there are some static tests, later on random tests too...


Hope you have fun:-)!
*/

const rotateMatrix = (arr) => {
  const numRows = arr.length;
  const numCols = arr[0].length;
  const rotatedMatrix = [];

  for (let col = numCols - 1; col >= 0; col--) {
    const newRow = [];
    for (let row = 0; row < numRows; row++) {
      newRow.push(arr[row][col]);
    }
    rotatedMatrix.push(newRow);
  }

  return rotatedMatrix;
};

console.log(
  rotateMatrix([
    [-1, 4, 5],
    [2, 3, 4],
  ])
);
//[ [ 5, 4 ], [ 4, 3 ], [ -1, 2 ] ]
