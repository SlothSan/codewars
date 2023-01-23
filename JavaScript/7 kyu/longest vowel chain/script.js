/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon
*/

const longestVowelChain = (string) => {
  let max = 0;
  let vowelMap = {
    a: "a",
    e: "e",
    o: "o",
    i: "i",
    u: "u",
  };
  for (let i = 0; i < string.length; i++) {
    if (vowelMap[string[i]] !== undefined) {
      console.log("Vowel!");
    }
  }
};

console.log(longestVowelChain("codewarriors"));
