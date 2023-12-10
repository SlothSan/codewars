/*
Task

In this task, you need to restore a string from a list of its copies.

You will receive an array of strings. All of them are supposed to be the same as the original but, unfortunately, they were corrupted which means some of the characters were replaced with asterisks ("*").

You have to restore the original string based on non-corrupted information you have. If in some cases it is not possible to determine what the original character was, use "#" character as a special marker for that.

If the array is empty, then return an empty string.
Examples:

input = [
  "a*cde",
  "*bcde",
  "abc*e"
]
result = "abcde"


input = [
  "a*c**",
  "**cd*",
  "a*cd*"
]
result = "a#cd#"
*/

const assembleString = (array) => {
  if (array.length === 0) {
    return "";
  }

  const maxLength = array.reduce((max, str) => Math.max(max, str.length), 0);
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    let nonAsteriskChars = array.filter((str) => str[i] !== "*");
    let uniqueChars = [...new Set(nonAsteriskChars.map((str) => str[i]))];

    if (uniqueChars.length === 1) {
      result += uniqueChars[0];
    } else {
      result += "#";
    }
  }

  return result;
};

console.log(
  assembleString(["H*llo, W*rld!", "Hel*o, *or*d!", "*ello* World*"])
);
//Hello, World!
