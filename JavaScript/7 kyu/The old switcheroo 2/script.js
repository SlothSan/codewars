/*
This is a follow up from my kata The old switcheroo

Write the function :

function encode(str)
that takes in a string str and replaces all the letters with their respective positions in the English alphabet.

encode('abc') == '123'   // a is 1st in English alpabet, b is 2nd and c is 3rd
encode('codewars') == '315452311819'
encode('abc-#@5') == '123-#@5'
String are case sensitive.

// Bonus point if you don't use toLowerCase()
*/
const encode = (str) => {
  return str
    .toLowerCase()
    .split("")
    .map((letter) => {
      let charCode = letter.charCodeAt(0) - 96;
      if (charCode >= 1 && charCode <= 27) {
        return charCode;
      } else {
        return letter;
      }
    })
    .join("");
};

console.log(encode("Hello123")); //85121215123
