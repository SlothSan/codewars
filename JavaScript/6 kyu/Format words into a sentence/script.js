/*
Complete the method so that it formats the words into a single comma separated value. The last word should be separated by the word 'and' instead of a comma. The method takes in an array of strings and returns a single formatted string.

Note:

Empty string values should be ignored.
Empty arrays or null/nil/None values being passed into the method should result in an empty string being returned.
Example: (Input --> output)

['ninja', 'samurai', 'ronin'] --> "ninja, samurai and ronin"
['ninja', '', 'ronin'] --> "ninja and ronin"
[] -->"
*/

const formatWords = (words) => {
  if (!words || words.length === 0) {
    return "";
  }
  const validWords = words.filter((word) => word !== "");

  if (validWords.length === 0) {
    return "";
  }

  if (validWords.length === 1) {
    return validWords[0];
  }

  const lastWord = validWords.pop();

  return validWords.join(", ") + " and " + lastWord;
};

console.log(formatWords(["ninja", "samurai", "ronin"])); //ninja, samurai and ronin
