/* 
Given an integer n, find the maximal number you can obtain by deleting exactly one digit of the given number.

Example
For n = 152, the output should be 52;

For n = 1001, the output should be 101.

Input/Output
[input] integer n

Constraints: 10 ≤ n ≤ 1000000.

[output] an integer
*/

const deleteDigit = (n) => {
  const digits = String(n).split("");
  let maxNumber = -1;

  for (let i = 0; i < digits.length; i++) {
    const removedDigitNumber = Number(
      digits.filter((_, index) => index !== i).join("")
    );
    if (removedDigitNumber > maxNumber) {
      maxNumber = removedDigitNumber;
    }
  }

  return maxNumber;
};

console.log(deleteDigit(152)); //52
