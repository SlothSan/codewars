/*
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are:

2332
110011
54322345

For a given number num, return its closest numerical palindrome which can either be smaller or larger than num. If there are 2 possible values, the larger value should be returned. If num is a numerical palindrome itself, return it.

For this kata, single digit numbers will NOT be considered numerical palindromes.

Also, you know the drill - be sure to return "Not valid" if the input is not an integer or is less than 0.

palindrome(8) => 11
palindrome(281) => 282 
palindrome(1029) => 1001
palindrome(1221) => 1221
palindrome("1221") => "Not valid"
*/

const isPalindrome = (num) => {
  if (num <= 10) return false;
  const str = String(num);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const palindrome = (num) => {
  if (typeof num !== "number" || num < 0 || num % 1 !== 0) {
    return "Not valid";
  }

  if (isPalindrome(num)) {
    return num;
  }

  let smaller = num - 1;
  let larger = num + 1;

  while (true) {
    if (isPalindrome(smaller)) {
      return smaller;
    } else if (isPalindrome(larger)) {
      return larger;
    }
    smaller--;
    larger++;
  }
};

console.log(palindrome(1029)); //1001
