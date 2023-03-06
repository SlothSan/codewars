/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/

const moveTen = (s) => {
  return s
    .split("")
    .map((letter) => {
      letter = letter.charCodeAt(0) - 96 + 10;
      if (letter > 26) return String.fromCharCode(letter - 26 + 96);
      return String.fromCharCode(letter + 96);
    })
    .join("");
};

console.log(moveTen("testcase")); //docdmkco
