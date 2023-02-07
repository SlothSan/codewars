/* 
Recreation of Project Euler problem #6

Find the difference between the sum of the squares of the first n natural numbers (1 <= n <= 100) and the square of their sum.

Example
For example, when n = 10:

The square of the sum of the numbers is:

(1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10)2 = 552 = 3025

The sum of the squares of the numbers is:

12 + 22 + 32 + 42 + 52 + 62 + 72 + 82 + 92 + 102 = 385

Hence the difference between square of the sum of the first ten natural numbers and the sum of the squares of those numbes is: 3025 - 385 = 2640 */

const differenceOfSquares = (number) => {
  const start = 1;
  //get sum of 1 and N and square it
  let numberArray = [...Array(number - 1 + 1).keys()].map((x) => x + 1);
  let sumSquared = Math.pow(
    numberArray.reduce(
      (accumlator, currentValue) => accumlator + currentValue,
      0
    ),
    2
  );
  //get sum of each number between 1 and N sqaured
  let eachSquaredSum = numberArray
    .map((number) => Math.pow(number, 2))
    .reduce((accumlator, currentValue) => accumlator + currentValue, 0);
  console.log(eachSquaredSum);

  //return difference between sum of each squard and sum squared
  return sumSquared - eachSquaredSum;
};

console.log(differenceOfSquares(5)); //expect 170
