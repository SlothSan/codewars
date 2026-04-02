/*
You have a grid with 
m
m rows and 
n
n columns. Return the number of unique ways that start from the top-left corner and go to the bottom-right corner. You are only allowed to move right and down.

For example, in the below grid of 
2
2 rows and 
3
3 columns, there are 
10
10 unique paths:

o----o----o----o
|    |    |    |
o----o----o----o
|    |    |    |
o----o----o----o
Note: there are random tests for grids up to 1000 x 1000 in most languages, so a naive solution will not work.
*/

const numberOfRoutes = (m, n) => {
  let a = BigInt(m + n);
  let b = BigInt(Math.min(m, n));
  let result = 1n;

  for (let i = 1n; i <= b; i++) {
    result = (result * (a - b + i)) / i;
  }

  return result;
};

console.log(numberOfRoutes(100, 3));
//176851n
