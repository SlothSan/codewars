/*
Pig latin is created by taking all the consonants before the first vowel of a word and moving them to the back of the word followed by the letters "ay".

"hello" => "ellohay"
"creating" => "eatingcray"
If the first letter of the word is a vowel, the string is left the same and the letters "way" are appended to the end.

"algorithm" => "algorithmway"
This problem is different from other variations in that it expects casing to remain the same so:

"Hello World" => "Ellohay Orldway"
as well as punctuation.

"Pizza? Yes please!" => "Izzapay? Esyay easeplay!"
Your job is to take a string and translate it to Pig Latin. The string will never be undefined but may contain both numbers and letters. A word will never be a combination of numbers and letters. Also, there will never be punctuation at the beginning of a word and the only capital letter in a word will be the first letter meaning there are zero all capitalized words.


*/

const translate = (sentence) => {
  return sentence
    .split(/\b/)
    .map((word) => {
      let match = word.match(/[a-zA-Z]+/);
      if (!match) return word;
      let w = match[0],
        firstVowel = w.search(/[aeiou]/i);
      let translated =
        firstVowel === 0
          ? w + "way"
          : w.slice(firstVowel) + w.slice(0, firstVowel) + "ay";
      if (w[0].toUpperCase() === w[0])
        translated =
          translated.charAt(0).toUpperCase() +
          translated.slice(1).toLowerCase();
      return word.replace(w, translated);
    })
    .join("");
};

console.log(translate("Pizza? Yes Please!!"));
//Izzapay? Esyay easeplay!!
