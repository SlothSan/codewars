/*
In this exercise, you will have to create a function named tiyFizzBuzz. This function will take on a string parameter and will return that string with some characters replaced, depending on the value:

If a letter is a upper case consonants, replace that character with "Iron".
If a letter is a lower case consonants or a non-alpha character, do nothing to that character
If a letter is a upper case vowel, replace that character with "Iron Yard".
If a letter is a lower case vowel, replace that character with "Yard".
Ready?
*/

const tiyFizzBuzz = (sentence) => {
  const vowels = ["A", "E", "I", "O", "U"];
  const consonants = [
    "B",
    "C",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "M",
    "N",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  const lowerCaseVowels = ["a", "e", "i", "o", "u"];

  return sentence
    .split("")
    .map((char) => {
      if (consonants.includes(char)) {
        return "Iron";
      }

      if (vowels.includes(char)) {
        return "Iron Yard";
      }

      if (lowerCaseVowels.includes(char)) {
        return "Yard";
      }
      return char;
    })
    .join("");
};

console.log(tiyFizzBuzz("Hello World!"));
//IronYardllYard IronYardrld!
