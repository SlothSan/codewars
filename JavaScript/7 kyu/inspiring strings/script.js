/*
When given a string of space separated words, return the word with the longest length. If there are multiple words with the longest length, return the last instance of the word with the longest length.

Example:

'red white blue' //returns string value of white

'red blue gold' //returns gold
*/

const longestWord = (stringOfWords) => {
  let returnString = "";
  stringOfWords = stringOfWords.split(" ");
  for (let i = 0; i < stringOfWords.length; i++) {
    if (stringOfWords[i].length >= returnString.length)
      returnString = stringOfWords[i];
  }
  return returnString;
};

console.log(longestWord("a b c d e fgh")); //fgh
