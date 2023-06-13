/*
For a given string s find the character c (or C) with longest consecutive repetition and return:

[c, l]
where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

For empty string return:

["", 0]
Happy coding! :)
*/

const longestRepetition = (s) => {
  if (s === "") {
    return ["", 0];
  }
  let longestChar = s[0];
  let longestLength = 1;
  let currentChar = s[0];
  let currentLength = 1;

  for (let i = 1; i < s.length; i++) {
    if (s[i] === currentChar) {
      currentLength++;
      if (currentLength > longestLength) {
        longestLength = currentLength;
        longestChar = currentChar;
      }
    } else {
      currentChar = s[i];
      currentLength = 1;
    }
  }

  return [longestChar, longestLength];
};

console.log(longestRepetition("helllllllo woooorlds")); //[ 'l', 7 ]
