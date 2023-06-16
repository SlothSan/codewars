/*
In mathematics, Pascal's triangle is a triangular array of the binomial coefficients expressed with formula
​
 
where n denotes a row of the triangle, and k is a position of a term in the row.

Pascal's Triangle

You can read Wikipedia article on Pascal's Triangle for more information.

Task
Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

Example:
n = 1: [1]
n = 2: [1,  1, 1]
n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]
Note
Beware of overflow. Requested terms of a triangle are guaranteed to fit into the returned type, but depending on seleced method of calculations, intermediate values can be larger.
*/

const pascalsTriangle = (n) => {
  const triangle = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        const prevRow = triangle[i - 1];
        const value = prevRow[j - 1] + prevRow[j];
        row.push(value);
      }
    }
    triangle.push(row);
  }

  return triangle.flat();
};

console.log(pascalsTriangle(10));

/*
[
   1,   1,   1,  1,  2,  1,  1,  3,  3,  1, 1,  4,
   6,   4,   1,  1,  5, 10, 10,  5,  1,  1, 6, 15,
  20,  15,   6,  1,  1,  7, 21, 35, 35, 21, 7,  1,
   1,   8,  28, 56, 70, 56, 28,  8,  1,  1, 9, 36,
  84, 126, 126, 84, 36,  9,  1
]
*/
