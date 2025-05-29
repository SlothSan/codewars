/*
Intro
Hi there! You have to implement a function that takes a hex-color string and returns the string represents the complementary color.
What is the hex-color? You can find the answer on w3schools and Wikipedia

Input
This function takes only one argument - a hexadecimal string (case-ignored with chars 0..9 or A..F) without hash-char "#". If the string is shorter than 6 characters, pad it with zeroes from the left to make it 6 characters long.

"a23" <=> "000a23"
"" <=> "0" <=> "000000"
Output
Your function output should be an uppercased string containing a hash character (#) followed by the complementary color. Complementary color is some color that gives completely white color in sum with the entered one: #000A23 + #FFF5DC = #FFFFFF

Errors
If the entered argument is incorrect: string length is 7+, has non-hexadecimal characters or non-string type, then an Error should be raised/thrown (throw an IllegalArgumentException in Java) or Nothing should be returned in Haskell.

"00fffff" --> Incorrect string length
"00ffZZ"  --> Non-hex chars
 112233   --> Incorrect type (not a string)
Examples
   Input        Output
------------------------
 "01fD08" --> "#FE02F7"
    "a23" --> "#FFF5DC"
       "" --> "#FFFFFF"
*/

const getReversedColor = (hex) => {
  if (typeof hex !== "string") throw new TypeError("Argument must be a string");
  if (hex.length > 6) throw new Error("Incorrect string length");
  if (!/^[0-9a-f]*$/i.test(hex)) throw new Error("Non-hexadecimal characters");

  const padded = hex.padStart(6, "0").toUpperCase();
  const value = parseInt(padded, 16);
  const comp = 0xffffff - value;

  return "#" + comp.toString(16).toUpperCase().padStart(6, "0");
};

console.log(getReversedColor("FFCADA")); //#003525
