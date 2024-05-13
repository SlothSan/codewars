/*
Task
Given two integers a and b, return the sum of the numerator and the denominator of the reduced fraction a/b.

Example
For a = 2, b = 4, the result should be 3

Since 2/4 = 1/2 => 1 + 2 = 3.

For a = 10, b = 100, the result should be 11

Since 10/100 = 1/10 => 1 + 10 = 11.

For a = 5, b = 5, the result should be 2

Since 5/5 = 1/1 => 1 + 1 = 2.

Input/Output
[input] integer a
The numerator, 1 ≤ a ≤ 2000.

[input] integer b
The denominator, 1 ≤ b ≤ 2000.

[output] an integer
The sum of the numerator and the denominator of the reduces fraction.
*/

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

const fraction = (a, b) => {
  const commonDivisor = gcd(a, b);
  const numerator = a / commonDivisor;
  const denominator = b / commonDivisor;
  return numerator + denominator;
};

console.log(fraction(90, 120)); //7
