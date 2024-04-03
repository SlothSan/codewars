/*
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

See test cases for more examples.

Good luck!

If you like this Kata, please try:

Sub-array division

Divisor harmony
*/

const primeFactors = (num) => {
  const factors = [];
  let divisor = 2;
  while (num >= 2) {
    if (num % divisor === 0) {
      factors.push(divisor);
      num /= divisor;
    } else {
      divisor++;
    }
  }
  return factors;
}

const solve(a, b) => {
  const bFactors = primeFactors(b);
  for (const factor of bFactors) {
    if (a % factor !== 0) return false;
  }
  return true;
}

console.log(solve(2, 256)) //true