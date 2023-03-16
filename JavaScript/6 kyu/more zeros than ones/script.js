/*
Create a moreZeros function which will receive a string for input, and return an array (or null terminated string in C) containing only the characters from that string whose binary representation of its ASCII value consists of more zeros than ones.

You should remove any duplicate characters, keeping the first occurrence of any such duplicates, so they are in the same order in the final array as they first appeared in the input string.

Examples

'abcde' === ["1100001", "1100010", "1100011", "1100100", "1100101"]
               True       True       False      True       False
                   
        --> ['a','b','d']
    
'DIGEST'--> ['D','I','E','T']
All input will be valid strings of length > 0. Leading zeros in binary should not be counted.
*/

const moreZeros = (s) => {
  let returnArr = [];
  s = Array.from(new Set(s.split("")));
  s = s.map((character) => character.charCodeAt(0).toString(2));
  for (let i = 0; i < s.length; i++) {
    let letter = s[i].split("");
    let count = 0;
    for (let j = 0; j < letter.length; j++) {
      if (letter[j] === "0") {
        count++;
      } else {
        count--;
      }
    }
    if (count > 0) returnArr.push(letter.join(""));
  }
  return returnArr.map((letter) => String.fromCharCode(parseInt(letter, 2)));
};

console.log(moreZeros("abcde")); //[a, b, d];
