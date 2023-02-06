/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon
 */

const solve = (string) => {
  let vowelRegex = /[aeiou]/,
    current = 0,
    max = 0;
  //loop through each char and if a vowel increment the current
  //if curr  > max  max = curr
  //else if not a vowel set current back to 0;
  for (let i = 0; i < string.length; i++) {
    if (vowelRegex.test(string[i])) {
      current++;
      if (current > max) {
        max = current;
      }
    } else {
      current = 0;
    }
  }
  return max;
};

console.log(solve("codewarriors")); //expectec output 2
