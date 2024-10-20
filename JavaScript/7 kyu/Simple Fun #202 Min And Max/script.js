/*
Task
You are given three integers l, d and x. Your task is:

• determine the minimal integer n 
    such that l ≤ n ≤ d, and the sum of its digits equals x.
• determine the maximal integer m 
    such that l ≤ m ≤ d, and the sum of its digits equals x.
It is guaranteed that such numbers always exist.

Input/Output
[input] integer l

[input] integer d

1 ≤ l ≤ d ≤ 10000.

[input] integer x
1 ≤ x ≤ 36

[output] an integer array
Array of two elements, where the first element is n, and the second one is m.

Example
For l = 500, d = 505, x = 10, the output should be [505, 505].

For l = 100, d = 200, x = 10, the output should be [109, 190].
*/

const sumOfDigits = (num) =>
  num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + +digit, 0);

const minAndMax = (l, d, x) => {
  let n, m;
  for (let i = l; i <= d; i++) {
    if (sumOfDigits(i) === x) {
      n = i;
      break;
    }
  }
  for (let i = d; i >= l; i--) {
    if (sumOfDigits(i) === x) {
      m = i;
      break;
    }
  }

  return [n, m];
};

console.log(minAndMax(500, 505, 10));
//[ 505, 505 ]
