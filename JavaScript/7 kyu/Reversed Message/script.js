/*
Reverse a message so that the words and letters passed into it are made lower case and reversed. In addition, capitalise the first letter of the newly reversed words. If a number or symbol(!#,>) is now in the first position of the word, no capitalisation needs to occur.

Example:

reverseMessage('This is an example of a Reversed Message!');
Returns: '!egassem Desrever A Fo Elpmaxe Na Si Siht'

*/

const reverseMessage = (str) => {
  return str
    .split(" ")
    .map((word) => {
      return word
        .split("")
        .map((char, index) => {
          if (index === word.length - 1 && /[a-zA-Z]/.test(char)) {
            return char.toUpperCase();
          }
          return char.toLowerCase();
        })
        .reverse()
        .join("");
    })
    .reverse()
    .join(" ");
};

console.log(reverseMessage("Hello World"));
//Dlrow Olleh
