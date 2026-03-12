/*
We have a square matrix M of dimension n x n that has positive and negative numbers in the ranges [-9,-1] and [0,9],( the value 0 is excluded).

We want to add up all the products of the elements of the diagonals UP-LEFT to DOWN-BOTTOM, that is the value ofsum1; and the elements of the diagonals UP-RIGHT to LEFT-DOWN and that is sum2. Then, as a final result, the value of sum1 - sum2.

E.g.

M = [[ 1,  4, 7,  6,  5],
     [-3,  2, 8,  1,  3],
     [ 6,  2, 9,  7, -4],
     [ 1, -2, 4, -2,  6],
     [ 3,  2, 2, -4,  7]]
Let's see how to get this result in the image below:

source: imgur.com

So the value of sum1 - sum2 is equal to:

1164 - 66 = 1098
Create the code to do this calculation.

Features of the random tests:

Numbers of tests = 150
5 <= dimension <= 25 (python, ruby and COBOL)
5 <= dimension <= 20 (javascript)
-10 < M[i,j] < 0 and 0 < M[i,j] < 10
This kata is available in Python2, Ruby, Typescript, D, Cobol, Julia, Rust and Javascript at the moment. Translations into another languages will be released soon. Enjoy it!
*/

const sumProdDiags = (matrix) => {
  const n = matrix.length;

  let diag1 = new Map(); // "\" diagonals
  let diag2 = new Map(); // "/" diagonals

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      const key1 = c - r;
      const key2 = r + c;

      if (!diag1.has(key1)) diag1.set(key1, 1);
      if (!diag2.has(key2)) diag2.set(key2, 1);

      diag1.set(key1, diag1.get(key1) * matrix[r][c]);
      diag2.set(key2, diag2.get(key2) * matrix[r][c]);
    }
  }

  let sum1 = 0;
  let sum2 = 0;

  for (let val of diag1.values()) sum1 += val;
  for (let val of diag2.values()) sum2 += val;

  return sum1 - sum2;
};

const M1 = [
  [1, 4, 7, 6, 5],
  [-3, 2, 8, 1, 3],
  [6, 2, 9, 7, -4],
  [1, -2, 4, -2, 6],
  [3, 2, 2, -4, 7],
];

console.log(sumProdDiags(M1));
