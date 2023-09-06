/*
Given two words, how many letters do you have to remove from them to make them anagrams?
Example
First word : c od e w ar s (4 letters removed)
Second word : ha c k er r a nk (6 letters removed)
Result : 10
Hints
A word is an anagram of another word if they have the same letters (usually in a different order).
Do not worry about case. All inputs will be lowercase.
When you're done with this kata, check out its big brother/sister : https://www.codewars.com/kata/hardcore-anagram-difference
*/

const anagramDifference = (w1, w2) => {
  let word1 = w1.toLowerCase();
  let word2 = w2.toLowerCase();

  const count1 = new Array(26).fill(0);
  const count2 = new Array(26).fill(0);

  for (let i = 0; i < word1.length; i++) {
    const charCode = word1.charCodeAt(i) - "a".charCodeAt(0);
    count1[charCode]++;
  }

  for (let i = 0; i < word2.length; i++) {
    const charCode = word2.charCodeAt(i) - "a".charCodeAt(0);
    count2[charCode]++;
  }

  let difference = 0;
  for (let i = 0; i < 26; i++) {
    difference += Math.abs(count1[i] - count2[i]);
  }

  return difference;
};

console.log(anagramDifference("Codewars", "Hackerrank"));
//10
