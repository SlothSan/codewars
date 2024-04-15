/* 
Write a function that accepts two parameters, i) a string (containing a list of words) and ii) an integer (n). The function should alphabetize the list based on the nth letter of each word.

The letters should be compared case-insensitive. If both letters are the same, order them normally (lexicographically), again, case-insensitive.

Example:

function sortIt('bid, zag', 2) //=> 'zag, bid'
The length of all words provided in the list will be >= n. The format will be "x, x, x". In Haskell you'll get a list of Strings instead.
*/

const sortIt = (list, n) => {
  const wordsArray = list.split(", ");

  wordsArray.sort((a, b) => {
    const charA = a.charAt(n - 1).toLowerCase();
    const charB = b.charAt(n - 1).toLowerCase();

    if (charA !== charB) {
      return charA.localeCompare(charB);
    }

    return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  return wordsArray.join(", ");
};

console.log(sortIt("bill, bell, ball, bull", 2));
//ball, bell, bill, bull
