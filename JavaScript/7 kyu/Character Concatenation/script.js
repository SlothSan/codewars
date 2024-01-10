/*
Given a string, you progressively need to concatenate the first letter from the left and the first letter to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.

If the string's length is odd drop the central element.

For example:

charConcat("abcdef")    == 'af1be2cd3'
charConcat("abc!def")   == 'af1be2cd3' // same result
*/

const charConcat = (string) => {
  if (string.length % 2 !== 0) {
    string =
      string.slice(0, Math.floor(string.length / 2)) +
      string.slice(Math.floor(string.length / 2) + 1);
  }
  let result = "";

  for (let i = 0; i < string.length / 2; i++) {
    result += string[i] + string[string.length - i - 1] + (i + 1);
  }

  return result;
};

console.log(charConcat("abc def"));
//af1be2cd3
