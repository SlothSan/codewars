/*
Find the longest substring in alphabetical order.

Example: the longest alphabetical substring in "asdfaaaabbbbcttavvfffffdf" is "aaaabbbbctt".

There are tests with strings up to 10 000 characters long so your code will need to be efficient.

The input will only consist of lowercase characters and will be at least one letter long.

If there are multiple solutions, return the one that appears first.

Good luck :)
*/

const longest = (str) => {
  let longestSub = "",
    length = 0,
    start = 0,
    prev = str[0];
  for (let i = 1; i <= str.length; ++i) {
    if (i == str.length || str[i] < prev) {
      if (length < i - start) {
        longestSub = str.substring(start, i);
        length = i - start;
      }
      start = i;
    }
    prev = str[i];
  }
  return longestSub;
};

console.log(longest("asdfaaaabbbbcttavvfffffdf")); //aaaabbbbctt
