/* 
Task:
Consider a sequence where the first two numbers are 0 and 1 and the next number of the sequence is the sum of the previous 2 modulo 3. Write a function that finds the nth number of the sequence.

Constraints:
1 ≤ N ≤ 10^19
Example:
sequence(1);
0
sequence(2);
1
sequence(3);
1
*/

function multiplyMatrix(a, b) {
  let result = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      for (let k = 0; k < 2; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
      result[i][j] %= 3;
    }
  }
  return result;
}

function powerMatrix(matrix, n) {
  if (n === 1) return matrix;
  if (n % 2 === 0) {
    let halfPower = powerMatrix(matrix, n / 2);
    return multiplyMatrix(halfPower, halfPower);
  } else {
    let halfPower = powerMatrix(matrix, (n - 1) / 2);
    let squared = multiplyMatrix(halfPower, halfPower);
    return multiplyMatrix(matrix, squared);
  }
}

function sequence(n) {
  if (n === 1) return 0;
  if (n === 2) return 1;

  let baseMatrix = [
    [1, 1],
    [1, 0],
  ];
  let poweredMatrix = powerMatrix(baseMatrix, n - 2);
  return poweredMatrix[0][0];
}


//If you try and brute force this, your gonna have a bad time. 
console.log(sequence(51013947783));
