/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]
Points:

The arrays may be of different lengths, with at least one character/digit.
One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
Inspired by https://adriann.github.io/programming_problems.html
*/

const mergeArrays = (a, b) => {
  const maxLength = Math.max(a.length, b.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    result.push(a[i]);
    result.push(b[i]);
  }

  return result.filter((value) => value !== undefined);
};

console.log(mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ["a", "b", "c", "d", "e"])); //[1, "a", 2, "b", 3, "c", 4, "d", 5, "e", 6, 7, 8]
