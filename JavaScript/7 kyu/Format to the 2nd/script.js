/*
Given some positive integers, I wish to print the integers such that all take up the same width by adding a minimum number of leading zeroes. No leading zeroes shall be added to the largest integer.

For example, given 1, 23, 2, 17, 102, I wish to print out these numbers as follows:

001
023
002
017
102
Write a function that takes a variable number of integers and returns the string to be printed out.
*/

const printNums = (...args) => {
  if (!args.length) return "";
  let maxStr = String(Math.max(...args)).length;

  return args
    .map((curr) => {
      let currStr = String(curr);
      let padStartAmount = maxStr - currStr.length;
      return padStartAmount ? "0".repeat(padStartAmount) + currStr : currStr;
    })
    .join("\n");
};

console.log(printNums(1, 12, 100, 1000));

/*
0001
0012
0100
1000
*/
