/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/

const reverseNumber = (num) => {
  const isNegative = num < 0;
  const reversedStr = Math.abs(num).toString().split("").reverse().join("");
  const reversedNum = Number(reversedStr);
  return isNegative ? -reversedNum : reversedNum;
};

console.log(reverseNumber(-3123)); //-3213

