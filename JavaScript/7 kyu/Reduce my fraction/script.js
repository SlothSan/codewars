/*
Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

input:   [numerator, denominator]
output:  [reduced numerator, reduced denominator]
example: [45, 120] --> [3, 8]
All numerators and denominators will be positive integers.

Note: This is an introductory Kata for a series... coming soon!
*/

const reduce = (fraction) => {
  const [numerator, denominator] = fraction;
  const gcd = findGCD(numerator, denominator);
  return [numerator / gcd, denominator / gcd];
};

const findGCD = (a, b) => {
  return b === 0 ? a : findGCD(b, a % b);
};

console.log(reduce([80, 120])); //[ 2, 3 ]
