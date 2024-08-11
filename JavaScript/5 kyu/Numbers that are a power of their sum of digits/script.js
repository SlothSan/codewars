/*
The number 81 has a special property, a certain power of the sum of its digits is equal to 81 (nine squared). Eighty one (81), is the first number in having this property (not considering numbers of one digit). The next one, is 512. Let's see both cases with the details

8 + 1 = 9 and 92 = 81

512 = 5 + 1 + 2 = 8 and 83 = 512

We need to make a function that receives a number as argument n and returns the n-th term of this sequence of numbers.

Examples (input --> output)
1 --> 81

2 --> 512
Happy coding!
*/

const isPowerSumDigTerm = (num) => {
  const base = num
    .toString()
    .split("")
    .reduce((sum, d) => sum + +d, 0);
  return base > 1 && Number.isInteger(Math.log(num) / Math.log(base));
};

const generateSeries = () => {
  const series = [];
  for (let a = 2; a < 99; a++) {
    for (let b = 2; b < 42; b++) {
      const c = a ** b;
      if (
        a ===
        c
          .toString()
          .split("")
          .reduce((sum, d) => sum + +d, 0)
      ) {
        series.push(c);
      }
    }
  }
  return series.sort((x, y) => x - y);
};

const powerSumDigTerm = (n) => generateSeries()[n - 1];

console.log(powerSumDigTerm(4)); //4913
