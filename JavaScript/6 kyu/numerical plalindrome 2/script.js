/*
2332
110011
54322345

For this kata, single digit numbers will not be considered numerical palindromes.

For a given number num, write a function to test if the number contains a numerical palindrome or not and return a boolean (true if it does and false if does not). Return "Not valid" if the input is not an integer or is less than 0.

Note: Palindromes should be found without permutating num.

palindrome(5) => false
palindrome(1221) => true
palindrome(141221001) => true
palindrome(1215) => true 
palindrome(1294) => false 
palindrome("109982") => "Not valid"

*/

const isPalindrome = (str) => {
  if (str === str.split("").reverse().join("")) {
    return true;
  }
  return false;
};

const palindrome = (num) => {
  if (typeof num !== "number" || num < 0 || num % 1 !== 0) return `Not valid`;

  let numString = num.toString();

  for (let i = 0; i < numString.length; i++) {
    for (let j = i + 2; j <= numString.length; j++) {
      let substr = numString.substring(i, j);
      if (isPalindrome(substr)) {
        return true;
      }
    }
  }
  return false;
};

console.log(palindrome(123322367)); //true
