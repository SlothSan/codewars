/*
Change every letter in a given string to the next letter in the alphabet. The function takes a single parameter s (string).

Notes:

Spaces and special characters should remain the same.
Capital letters should transfer in the same way but remain capitilized.
Examples
"Hello"               -->  "Ifmmp"
"What is your name?"  -->  "Xibu jt zpvs obnf?"
"zoo"                 -->  "app"
"zzZAaa"              -->  "aaABbb"
*/

const nextLetter = (str) => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);
    let shiftedCharCode = charCode;
    if (str[i] >= "a" && str[i] <= "z") {
      shiftedCharCode = ((charCode - 97 + 1) % 26) + 97;
    } else if (str[i] >= "A" && str[i] <= "Z") {
      shiftedCharCode = ((charCode - 65 + 1) % 26) + 65;
    }
    result += String.fromCharCode(shiftedCharCode);
  }
  return result;
};

console.log(nextLetter("My Name Is Zoo"));
//Nz Obnf Jt App
