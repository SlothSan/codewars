/*
Create a function mispelled(word1, word2):

mispelled('versed', 'xersed'); // returns true
mispelled('versed', 'applb'); // returns false
mispelled('versed', 'v5rsed'); // returns true
mispelled('1versed', 'versed'); // returns true
mispelled('versed', 'versed'); // returns true
It checks if the word2 differs from word1 by at most one character.

This can include an extra char at the end or the beginning of either of words.

In the tests that expect true, the mispelled word will always differ mostly by one character. If the two words are the same, return True.
*/
const mispelled = (word1, word2) => {
  if (word1.length < word2.length) {
    let temp = word1;
    word1 = word2;
    word2 = temp;
  }
  let count = 0;
  for (let i = 0, j = 0; i < word1.length; i++, j++) {
    if (word1[i] !== word2[j]) {
      count++;
      if (word1.length > word2.length) {
        i++;
      }
    }
  }
  return count < 2;
};

console.log(mispelled("versed", "xersed")); //true
