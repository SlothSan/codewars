/*
Build a function sumNestedNumbers/sum_nested_numbers that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.

For example,

sumNestedNumbers([1, [2], 3, [4, [5]]])

should return 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149
*/

const sumLength = (arr) => {
  let positiveSum = 0;
  let negativeCount = 0;
  let zeroPosition = 1;

  arr.forEach((num) => {
    if (num > 0) {
      positiveSum += num;
    } else if (num < 0) {
      negativeCount += 1;
    } else {
      if (zeroPosition % 2 !== 0) {
        negativeCount += 1;
      }
      zeroPosition += 1;
    }
  });

  return `${positiveSum} ${negativeCount}`;
};

console.log(sumLength([-1, 2, 3, 4, 0, 1, 0, -2, 0, -3]));
//10 5
