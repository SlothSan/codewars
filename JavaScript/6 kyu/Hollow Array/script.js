/*
An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.

Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.
*/

const isHollow = (arr) => {
  let firstZeroIndex = arr.indexOf(0);
  if (firstZeroIndex === -1) {
    return false;
  }

  let lastZeroIndex = arr.lastIndexOf(0);
  if (lastZeroIndex - firstZeroIndex < 2) {
    return false;
  }

  for (let i = firstZeroIndex; i <= lastZeroIndex; i++) {
    if (arr[i] !== 0) {
      return false;
    }
  }

  let leftSideCount = firstZeroIndex;
  let rightSideCount = arr.length - 1 - lastZeroIndex;

  return leftSideCount === rightSideCount;
};

console.log((isHollow([-1,0,0,0,3])) // true
