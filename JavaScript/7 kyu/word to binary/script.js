/*
Write a function that takes a string and returns an array containing binary numbers equivalent to the ASCII codes of the characters of the string. The binary strings should be eight digits long.

Example: 'man' should return [ '01101101', '01100001', '01101110' ]
*/

const wordToBin = (str) => {
  return str.split("").map((letter) => "0" + letter.charCodeAt().toString(2));
};

console.log(wordToBin("man"));
