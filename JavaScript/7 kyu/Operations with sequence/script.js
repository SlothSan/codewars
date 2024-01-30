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
  return a
    .map((num, index) => {
      if (num > 0) {
        num = num * num;
      }
      if ((index + 1) % 3 === 0) {
        num = num * 3;
      }
      if ((index + 1) % 5 === 0) {
        num = num * -1;
      }
      return num;
    })
    .reduce((sum, num) => sum + num, 0);
};

console.log(calc([10, 40, 412, -120, 313]));
//412843
