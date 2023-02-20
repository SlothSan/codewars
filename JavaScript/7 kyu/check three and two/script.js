/* 
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

const checkThreeAndTwo = (array) => {
  let counts = {};
  for (number of array) {
    counts[number] = counts[number] ? counts[number] + 1 : 1;
  }
  return (Object.values(counts)[0] === 3 && Object.values(counts)[1] === 2) ||
    (Object.values(counts)[0] === 2 && Object.values(counts)[1] === 3)
    ? true
    : false;
};

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"])); //true
console.log(checkThreeAndTwo(["a", "c", "a", "c", "b"])); //false
console.log(checkThreeAndTwo(["b", "b", "b", "b", "c"])); // false
