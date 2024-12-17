/*
Imagine a circle. To encode the word codewars, we could split the circle into 8 parts (as codewars has 8 letters):

Then add the letters in a clockwise direction:Then remove the circle:
If we read the result from left to right, we get csordaew.

Decoding is the same process in reverse. If we decode csordaew, we get codewars.

Examples:
encode "codewars" -> "csordaew"
decode "csordaew" -> "codewars"
encode "white" -> "wehti"
decode "wehti" -> "white"
*/

const encode = (word) => {
  let result = [];
  let left = 0;
  let right = word.length - 1;

  while (left <= right) {
    if (left <= right) result.push(word[left++]);
    if (left <= right) result.push(word[right--]);
  }

  return result.join("");
};

const decode = (word) => {
  let result = new Array(word.length);
  let left = 0;
  let right = word.length - 1;
  let index = 0;

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) result[left++] = word[i];
    else result[right--] = word[i];
  }

  return result.join("");
};

console.log(encode("You have chosen to translate this kata."));
console.log(decode("Y.oaut ahka vsei hcth oesteanl stnoa rt"));
// You have chosen to translate this kata.
