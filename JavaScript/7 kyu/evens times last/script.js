/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.

Indices in sequence start from 0.

If the sequence is empty, you should return 0.
*/

const evenLast = (numbers) => {
  if (numbers.length === 0) return 0;
  return (
    numbers
      .filter((number, index) => index % 2 === 0)
      .reduce((accum, curr) => accum + curr, 0) * numbers[numbers.length - 1]
  );
};

console.log(evenLast([2, 3, 4, 5])); //30
console.log(evenLast([])); //shouldn't be NaN

console.log(sort([10, 9, 100, 123]));
