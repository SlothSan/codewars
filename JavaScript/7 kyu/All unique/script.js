/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/

const hasUniqueChars = (str) =>
  str.split("").every((curr, index, string) => string.indexOf(curr) === index);

console.log(hasUniqueChars("abcdef")); //true
console.log(hasUniqueChars("aba")); //false
