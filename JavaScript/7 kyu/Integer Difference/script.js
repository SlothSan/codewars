/*
Write a function that accepts two arguments: an array/list of integers and another integer (n).

Determine the number of times where two integers in the array have a difference of n.

For example:

[1, 1, 5, 6, 9, 16, 27], n=4  -->  3  # (1,5), (1,5), (5,9)
[1, 1, 3, 3], n=2             -->  4  # (1,3), (1,3), (1,3), (1,3)
*/

const intDiff = (arr, n) => {
  let matches = [];
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let nextCurrent = arr[j];
      if (Math.abs(current - nextCurrent) === n) matches.push(nextCurrent);
    }
  }
  return matches.length;
};

console.log(intDiff([1, 1, 5, 6, 9, 16, 27], 4)); //3
