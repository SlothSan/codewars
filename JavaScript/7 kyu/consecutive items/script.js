/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

const consecutive = (arr, a, b) => {
  let isConsecutive = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === a) {
      if (arr[i + 1] === b) isConsecutive = true;
    }
    if (arr[i] === b) {
      if (arr[i + 1] === a) isConsecutive = true;
    }
  }
  return isConsecutive;
};

console.log(consecutive([1, 3, 5, 7], 3, 7)); //false
console.log(consecutive([1, 3, 5, 7], 3, 1)); //true
console.log(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4)); //true
