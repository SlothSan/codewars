/*
Write a function that will check whether ANY permutation of the characters of the input string is a palindrome. Bonus points for a solution that is efficient and/or that uses only built-in language functions. Deem yourself brilliant if you can come up with a version that does not use any function whatsoever.

Example
madam -> True
adamm -> True
junk -> False

Hint
The brute force approach would be to generate all the permutations of the string and check each one of them whether it is a palindrome. However, an optimized approach will not require this at all.
*/

const permuteAPalindrome = (input) => {
  let arrInp = input.split("");
  let uniqArrInp = [...new Set(input)];
  const countArr = [];
  for (let i = 0; i < uniqArrInp.length; i++) {
    let count = 0;
    for (let j = 0; j < arrInp.length; j++) {
      if (arrInp[j] === uniqArrInp[i]) count++;
    }
    if (count % 2 !== 0) countArr.push(1);
  }
  return countArr.length <= 1;
};

console.log(permuteAPalindrome("madam")); //true
