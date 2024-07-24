/*
Description:
Remove the minimum number of exclamation marks from the start/end of each word in the sentence to make their amount equal on both sides.

Notes:
Words are separated with spaces
Each word will include at least 1 letter
There will be no exclamation marks in the middle of a word
Examples
remove("Hi!") === "Hi"
remove("!Hi! Hi!") === "!Hi! Hi"
remove("!!Hi! !Hi!!") === "!Hi! !Hi!"
remove("!!!!Hi!! !!!!Hi !Hi!!!") === "!!Hi!! Hi !Hi!"
*/

const remove = (s) => {
  return s
    .split(" ")
    .map((w) => {
      let startEx = w.match(/^!+/) ? w.match(/^!+/)[0].length : 0,
        endEx = w.match(/!+$/) ? w.match(/!+$/)[0].length : 0,
        word = w.replace(/(^!+)|(!+$)/g, "");
      return (
        "!".repeat(Math.min(startEx, endEx)) +
        word +
        "!".repeat(Math.min(startEx, endEx))
      );
    })
    .join(" ");
};

console.log(remove("!Hi! Hi!"));
//!Hi! Hi
