/*
Longest Palindromic Substring (Linear)
A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., 'madam' or 'racecar'. Even the letter 'x' is considered a palindrome.

For this Kata, you are given a string s. Write a function that returns the longest contiguous palindromic substring in s (it could be the entire string). In the event that there are multiple longest palindromic substrings, return the first to occur.

I'm not trying to trick you here:

You can assume that all inputs are valid strings.
Only the letters a-z will be used, all lowercase (your solution should, in theory, extend to more than just the letters a-z though).
NOTE: Quadratic asymptotic complexity (O(N^2)) or above will NOT work here.
*/

const longest_palindrome = (s) => {
  if (s.length < 2) {
    return s;
  }
  const modifiedS = "#" + s.split("").join("#") + "#";
  const p = new Array(modifiedS.length).fill(0);
  let center = (right = maxLen = maxCenter = 0);
  for (let i = 0; i < modifiedS.length; i++) {
    if (i < right) {
      const mirror = 2 * center - i;
      p[i] = Math.min(right - i, p[mirror]);
    }
    let leftIndex = i - (1 + p[i]);
    let rightIndex = i + (1 + p[i]);
    while (
      leftIndex >= 0 &&
      rightIndex < modifiedS.length &&
      modifiedS[leftIndex] === modifiedS[rightIndex]
    ) {
      p[i]++;
      leftIndex--;
      rightIndex++;
    }
    if (i + p[i] > right) {
      center = i;
      right = i + p[i];
    }
    if (p[i] > maxLen) {
      maxLen = p[i];
      maxCenter = i;
    }
  }
  const start = Math.floor((maxCenter - maxLen) / 2);
  const end = start + maxLen;
  return s.slice(start, end);
};

console.log(longest_palindrome("banana")); //anana
