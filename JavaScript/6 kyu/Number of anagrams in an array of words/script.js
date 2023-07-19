/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

const anagramCounter = (wordsArray) => {
  const sortedStringsCount = {};
  for (const word of wordsArray) {
    const sortedString = word.split("").sort().join("");
    sortedStringsCount[sortedString] =
      (sortedStringsCount[sortedString] || 0) + 1;
  }
  let anagramPairsCount = 0;
  for (const count of Object.values(sortedStringsCount)) {
    if (count >= 2) {
      anagramPairsCount += (count * (count - 1)) / 2;
    }
  }
  return anagramPairsCount;
};

console.log(
  anagramCounter(["dell", "ledl", "abc", "cba", "bca", "bac", "cab"])
); //11
