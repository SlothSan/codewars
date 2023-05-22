/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"
Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives
*/

const add = (a, b) => {
  let result = "";
  let carry = 0;
  for (
    let i = a.length - 1, j = b.length - 1;
    i >= 0 || j >= 0 || carry > 0;
    i--, j--
  ) {
    const digitA = i >= 0 ? parseInt(a.charAt(i)) : 0;
    const digitB = j >= 0 ? parseInt(b.charAt(j)) : 0;
    const sum = digitA + digitB + carry;
    result = (sum % 10) + result;
    carry = Math.floor(sum / 10);
  }
  while (result.charAt(0) === "0" && result.length > 1) {
    result = result.substr(1);
  }
  return result;
};

console.log(add("63829983432984289347293874", "90938498237058927340892374089"));
//91002328220491911630239667963
