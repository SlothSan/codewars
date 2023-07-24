/*
The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

Input
Array of 3 to 7 words of random length. No capital letters.

Example true
Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false
Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.
*/

const solution = (words) => {
  const canCombine = (a, b) => {
    return a.charAt(a.length - 1) === b.charAt(0);
  };

  // Recursive function to find a valid combination
  const findCombination = (usedWords, currentWord) => {
    if (usedWords.size === words.length) {
      return true;
    }
    for (let i = 0; i < words.length; i++) {
      if (!usedWords.has(i) && canCombine(currentWord, words[i])) {
        usedWords.add(i);
        if (findCombination(usedWords, words[i])) {
          return true;
        }
        usedWords.delete(i);
      }
    }
    return false;
  };

  // Start the search with each word as the initial word
  for (let i = 0; i < words.length; i++) {
    const usedWords = new Set();
    usedWords.add(i);
    if (findCombination(usedWords, words[i])) {
      return true;
    }
  }
  return false;
};

console.log(
  solution([
    "excavate",
    "endure",
    "desire",
    "screen",
    "theater",
    "excess",
    "night",
  ])
); //true
