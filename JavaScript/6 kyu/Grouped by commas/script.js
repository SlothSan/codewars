/*
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647

Examples
       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/

const groupByCommas = (n) => {
  let str = String(n);
  let digits = str.split("");
  for (let i = digits.length - 3; i > 0; i -= 3) {
    digits.splice(i, 0, ",");
  }
  let result = digits.join("");
  return result;
};

console.log(groupByCommas(10000)); //10,000
