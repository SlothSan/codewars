/*
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
For simplicity, you can treat the letter y as a consonant, not a vowel.

Good luck!
*/

const reverseVowels = (str) => {
  let arr = str.replace(/[^aeiou]/gi, "").split``.reverse();
  let i = 0;
  return str.replace(/[aeiou]/gi, (v) => arr[i++]);
};

console.log(reverseVowels("Hello")); //Holle
