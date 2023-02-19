/*
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

For example:

"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

const makeString = (s) => {
  return s
    .split(" ")
    .map((word) => word[0])
    .join("");
};

console.log(makeString("sees eyes xray yoat")); // sexy
