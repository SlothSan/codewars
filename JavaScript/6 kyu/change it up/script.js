/*
Create a function that takes a string as a parameter and does the following, in this order:

Replaces every letter with the letter following it in the alphabet (see note below)
Makes any vowels capital
Makes any consonants lower case
Note:

the alphabet should wrap around, so Z becomes A
in this kata, y isn't considered as a vowel.
So, for example the string "Cat30" would return "dbU30" (Cat30 --> Dbu30 --> dbU30)
*/
const changer = (str) => {
  str = str.toLowerCase();
  return str
    .split(" ")
    .map((word) =>
      word
        .split("")
        .map((letter) => {
          if (letter === "z") return "A";
          if (letter === "0") return "0";
          let x = parseInt(letter)
            ? letter
            : String.fromCharCode(letter.charCodeAt(letter.length - 1) + 1);
          if (/([aeiou])/g.test(x)) return x.toUpperCase();
          return x;
        })
        .join("")
    )
    .join(" ");
};

console.log(changer("Cat30")); //dbU30
