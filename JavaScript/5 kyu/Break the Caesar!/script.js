/* 
The Caesar cipher is a notorious (and notoriously simple) algorithm for encrypting a message: each letter is shifted a certain constant number of places in the alphabet. For example, applying a shift of 5 to the string "Hello, world!" yields "Mjqqt, btwqi!", which is jibberish.

In this kata, your task is to decrypt Caesar-encrypted messages using nothing but your wits, your computer, and a set of the 1000 (plus a few) most common words in English in lowercase (made available to you as a preloaded variable named WORDS, which you may use in your code as if you had defined it yourself).

Given a message, your function must return the most likely shift value as an integer.
A few hints:

Be wary of punctuation
Shift values may not be higher than 25
*/

const WORDS = require("./words");

const breakCaesar = (st) => {
  let cleanedWords = st.toLowerCase().replace(/[^a-z ]/g, "");

  const decryptWithShift = (shift) => {
    return cleanedWords
      .split("")
      .map((char) => {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
          let shiftedCode = ((code - 97 - shift + 26) % 26) + 97;
          return String.fromCharCode(shiftedCode);
        }
        return char;
      })
      .join("");
  };

  const countCommonWords = (message) => {
    const words = message.split(" ");
    let count = 0;
    for (let word of words) {
      if (WORDS.has(word)) {
        count++;
      }
    }
    return count;
  };

  let bestShift = 0;
  let maxCommonWords = 0;

  for (let shift = 0; shift <= 25; shift++) {
    let decryptedMessage = decryptWithShift(shift);
    let commonWordCount = countCommonWords(decryptedMessage);

    if (commonWordCount > maxCommonWords) {
      maxCommonWords = commonWordCount;
      bestShift = shift;
    }
  }
  return bestShift;
};

console.log(breakCaesar("Gur dhvpx oebja sbk whzcf bire gur ynml qbt.")); //13
