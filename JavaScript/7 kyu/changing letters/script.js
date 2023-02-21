/*
When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a v
*/

const swap = (string) => {
  return string.replace(/[aeiou]/g, (letter) => letter.toUpperCase());
};

console.log(swap("   @@@"));
