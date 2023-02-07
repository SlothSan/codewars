/*Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array. */

const isVow = (array) => {
  const vowelMap = {
    97: "a",
    101: "e",
    105: "i",
    111: "o",
    117: "u",
  };
  return array.map((charCode) => vowelMap[charCode] || charCode);
};

console.log(
  isVow([
    118, 117, 120, 121, 117, 98, 122, 97, 120, 106, 104, 116, 113, 114, 113,
    120, 106,
  ])
); //expect [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
