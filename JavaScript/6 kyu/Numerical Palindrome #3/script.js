/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, write a function which returns the number of numerical palindromes within each number. For this kata, single digit numbers will NOT be considered numerical palindromes.

Return "Not valid" if the input is not an integer or is less than 0.

palindrome(5) => 0
palindrome(1221) => 2 
palindrome(141221001) => 5  
palindrome(1294) => 0
palindrome("1221") => "Not valid"
*/

const palindrome = (num) => {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  }
  let numStr = String(num);
  let count = 0;

  for (let length = 2; length <= numStr.length; length++) {
    for (let i = 0; i <= numStr.length - length; i++) {
      let substring = numStr.substring(i, i + length);
      if (isPalindrome(substring)) {
        count++;
      }
    }
  }

  return count;
};

const isPalindrome = (str) => {
  return str === str.split("").reverse().join("");
};

console.log(palindrome(141221001));
// 5
