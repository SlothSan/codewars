/* 
Description:
The Padovan sequence is the sequence of integers P(n) defined by the initial values

P(0)=P(1)=P(2)=1

and the recurrence relation

P(n)=P(n-2)+P(n-3)

The first few values of P(n) are

1, 1, 1, 2, 2, 3, 4, 5, 7, 9, 12, 16, 21, 28, 37, 49, 65, 86, 114, 151, 200, 265, ...

Task
The task is to write a method that returns i-th Padovan number for i around 1,000,000

Examples
padovan(0) == 1

padovan(1) == 1

padovan(2) == 1

padovan(n) == padovan(n-2) + padovan(n-3)
Hint: use matrices
*/

const multiplyMatrices3x3 = (leftMatrix, rightMatrix) => {
  const resultMatrix = Array.from({ length: 3 }, () => Array(3).fill(0n));
  for (let row = 0; row < 3; ++row) {
    for (let pivot = 0; pivot < 3; ++pivot) {
      const leftValue = leftMatrix[row][pivot];
      if (leftValue === 0n) continue;
      for (let column = 0; column < 3; ++column) {
        resultMatrix[row][column] += leftValue * rightMatrix[pivot][column];
      }
    }
  }
  return resultMatrix;
};

const raiseMatrixToPower = (baseMatrix, exponent) => {
  let powerResult = [
    [1n, 0n, 0n],
    [0n, 1n, 0n],
    [0n, 0n, 1n],
  ];
  let currentPower = baseMatrix;
  let remainingExponent = BigInt(exponent);
  while (remainingExponent > 0n) {
    if (remainingExponent & 1n)
      powerResult = multiplyMatrices3x3(powerResult, currentPower);
    currentPower = multiplyMatrices3x3(currentPower, currentPower);
    remainingExponent >>= 1n;
  }
  return powerResult;
};

const padovan = (index) => {
  const n = BigInt(index);
  if (n <= 2n) return 1n;
  const transitionMatrix = [
    [0n, 1n, 1n],
    [1n, 0n, 0n],
    [0n, 1n, 0n],
  ];
  const poweredMatrix = raiseMatrixToPower(transitionMatrix, n - 2n);
  return poweredMatrix[0][0] + poweredMatrix[0][1] + poweredMatrix[0][2];
};

console.log(padovan(14)); //37n
