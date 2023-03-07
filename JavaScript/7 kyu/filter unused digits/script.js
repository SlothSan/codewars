/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.
*/

const unusedDigits = (...args) => {
  const targetNums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const numbersArr = [...args].join("").split("");
  return targetNums
    .filter((num) => {
      if (!numbersArr.includes(String(num))) return String(num);
    })
    .join("");
};

console.log(unusedDigits(12, 34, 56, 78)); //09
