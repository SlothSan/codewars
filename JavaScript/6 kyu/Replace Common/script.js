/*
Find the most common letter (not space) in the string(always lowercase and 2 < words) and replace it with the letter.

If such letters are two or more, choose the one that appears in the string( earlier.

For example:

('my mom loves me as never did', 't') => 'ty tot loves te as never did'
('real talk bro', 'n') => 'neal talk bno'
('great job go ahead', 'k') => 'grekt job go khekd'
*/

const mostFreqChar = (string) => {
  const letterCount = {};
  for (const letter of string) {
    if (/[a-z]/.test(letter)) {
      letterCount[letter] = (letterCount[letter] || 0) + 1;
    }
  }
  let maxLetter = "";
  let maxCount = 0;
  for (const [letter, count] of Object.entries(letterCount)) {
    if (count > maxCount || (count === maxCount && maxLetter === "")) {
      maxLetter = letter;
      maxCount = count;
    }
  }
  return maxLetter;
};

const replaceCommon = (string, letter) =>
  string.replace(new RegExp(mostFreqChar(string), "g"), letter);

console.log(replaceCommon("hello world", "m"));
//hemmo wormd
