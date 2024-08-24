/*
We have a matrix of integers with m rows and n columns.

(
a
11
a
12
⋯
a
1
n
a
21
a
22
⋯
a
2
n
⋯
⋯
⋯
⋯
⋯
⋯
⋯
⋯
a
m
1
a
m
2
⋯
a
m
n
)
⎝
⎛
​
  
a 
11
​
 
a 
21
​
 
⋯
⋯
a 
m1
​
 
​
  
a 
12
​
 
a 
22
​
 
⋯
⋯
a 
m2
​
 
​
  
⋯
⋯
⋯
⋯
⋯
​
  
a 
1n
​
 
a 
2n
​
 
⋯
⋯
a 
mn
​
 
​
  
⎠
⎞
​
 
We want to calculate the total sum for the matrix:

∑
i
=
1
m
∑
j
=
1
n
(
−
1
)
i
+
j
a
i
j
i=1
∑
m
​
  
j=1
∑
n
​
 (−1) 
i+j
 a 
ij
​
 
As you can see, the name "alternating sum" of the title is due to the sign of the terms that changes from one term to its contiguous one and so on.

Let's see an example:

matrix = [[1, 2, 3], [-3, -2, 1], [3, - 1, 2]]

total_sum = (1 - 2 + 3) + [-(-3) + (-2) - 1] + [3 - (-1) + 2] = 2 + 0 + 6 = 8
You may be given matrixes with their dimensions between these values:10 < m < 300 and 10 < n < 300.

More example cases in the Example Test Cases. Enjoy it!!
*/

const scoreMatrix = (matrix) => {
  let totalSum = 0;
  const m = matrix.length;
  const n = matrix[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let sign = Math.pow(-1, i + j);
      totalSum += sign * matrix[i][j];
    }
  }

  return totalSum;
};

console.log(
  scoreMatrix([
    [1, 2, 3],
    [-3, -2, 1],
    [3, -1, 2],
  ])
); //8
