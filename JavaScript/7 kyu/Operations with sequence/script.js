/*
Steps

Square the numbers that are greater than zero.
Multiply by 3 every third number.
Multiply by -1 every fifth number.
Return the sum of the sequence.
Example
{ -2, -1, 0, 1, 2 } returns -6

1. { -2, -1, 0, 1 * 1, 2 * 2 }
2. { -2, -1, 0 * 3, 1, 4 }
3. { -2, -1, 0, 1, -1 * 4 }
4. -6
P.S.: The sequence consists only of integers. And try not to use "for", "while" or "loop" statements.
*/

const calc = (a) => {
  const squaredNumbers = a.map((num) => (num > 0 ? num * num : num));
  const multipliedBy3 = squaredNumbers.map((num, index) =>
    (index + 1) % 3 === 0 ? num * 3 : num
  );
  const multipliedByMinus1 = multipliedBy3.map((num, index) =>
    (index + 1) % 5 === 0 ? num * -1 : num
  );
  const result = multipliedByMinus1.reduce((sum, num) => sum + num, 0);
  return result;
};

console.log(calc([10, 40, 412, -120, 313]));
//412843
