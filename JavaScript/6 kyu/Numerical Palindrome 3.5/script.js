/* 
A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward as forward. Examples of numerical palindromes are: 2332, 110011, 54322345

For a given number num, write a function which returns an array of all the numerical palindromes contained within each number. The array should be sorted in ascending order and any duplicates should be removed.

In this kata, single digit numbers and numbers which start or end with zeros (such as 010 and 00) are NOT considered valid numerical palindromes.

If num contains no valid palindromes, return "No palindromes found". Otherwise, return "Not valid" if the input is not an integer or is less than 0.

Examples
palindrome(1221)      =>  [22, 1221]
palindrome(34322122)  =>  [22, 212, 343, 22122]
palindrome(1001331)   =>  [33, 1001, 1331]
palindrome(1294)      =>  "No palindromes found"
palindrome("1221")    =>  "Not valid"
*/

const isPalindrome = (subStr) => {
  return subStr === subStr.split("").reverse().join("");
};

const palindrome = (num) => {
  if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
    return "Not valid";
  }
  const strNum = num.toString();
  const palindromes = new Set();

  for (let i = 0; i < strNum.length; i++) {
    for (let j = i + 2; j <= strNum.length; j++) {
      const subStr = strNum.slice(i, j);
      if (isPalindrome(subStr) && !/^0|0$/.test(subStr)) {
        palindromes.add(parseInt(subStr));
      }
    }
  }

  const result = Array.from(palindromes).sort((a, b) => a - b);

  return result.length > 0 ? result : "No palindromes found";
};

console.log(palindrome(1221));
//[ 22, 1221 ]
