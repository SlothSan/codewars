/* 
Given a string of integers, return the number of odd-numbered substrings that can be formed.

For example, in the case of "1341", they are 1, 1, 3, 13, 41, 341, 1341, a total of 7 numbers.

solve("1341") = 7. See test cases for more examples.

Good luck!

If you like substring Katas, please try

Longest vowel chain

Alphabet symmetry

*/

function solve(s) {
  let len = s.length;
  let count = 0;
  for (let i = 0; i < len; i++) {
    let temp = s[i] - "0";
    if (temp % 2 !== 0) count += i + 1;
  }

  return count;
}

console.log(solve("14123")); //9
