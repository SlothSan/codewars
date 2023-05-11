/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.
*/

const sumStrings = (a, b) => {
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

console.log(sumStrings("123", "456")); //579
