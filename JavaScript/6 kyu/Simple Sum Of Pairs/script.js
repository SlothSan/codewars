/*
Given an integer n, find two integers a and b such that:

A) a >= 0 and b >= 0
B) a + b = n
C) DigitSum(a) + Digitsum(b) is maximum of all possibilities.  
You will return the digitSum(a) + digitsum(b).

For example:
solve(29) = 11. If we take 15 + 14 = 29 and digitSum = 1 + 5 + 1 + 4 = 11. There is no larger outcome.
n will not exceed 10e10.

More examples in test cases.

Good luck!
*/

const digitSum = (num) => {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};

const solve = (n) => {
  let str = n.toString();
  let len = str.length;
  let maxSum = 0;

  // Try splitting n by changing digits to make a and b
  for (let i = 0; i < len; i++) {
    if (str[i] === "0") continue;
    let prefixA = str.slice(0, i) + (parseInt(str[i]) - 1).toString();
    let a = parseInt(prefixA + "9".repeat(len - i - 1));
    let b = n - a;
    maxSum = Math.max(maxSum, digitSum(a) + digitSum(b));
  }

  return maxSum;
};

console.log(solve(20)); //11
