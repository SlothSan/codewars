/* 
This Kata is intended as a small challenge for my students

Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

removeVowels("drake") // => "drk"
removeVowels("aeiou") // => ""
*/
const removeVowels = (str) => {
  //code here
  let vowelsMap = {
    a: "a",
    e: "e",
    i: "i",
    o: "o",
    u: "u",
  };
  return str
    .split("")
    .filter((letter) => (vowelsMap[letter] !== undefined ? "" : letter))
    .join("");
};

console.log(removeVowels("drake")); // drk
