/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

const consonantCount = (str) => {
  if (!str) return 0;
  const vowels = ["a", "e", "i", "o", "u"];
  return str
    .toLowerCase()
    .replace(/[^a-zA-Z]+/g, "")
    .split("")
    .filter((letter) => !vowels.includes(letter)).length;
};

console.log(
  consonantCount(
    "aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#"
  )
); //42
