/*
Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

A few examples:

['u', 'y'] =>  ['u', 'y'] // average length is 1
['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3

    If the average length is not an integer, use Math.round().
    The input array's length > 1
*/

const averageLength = (input) => {
  let averageLen = Math.round(
    input.reduce((acc, curr) => acc + curr.length, 0) / input.length
  );
  return input.map((curr) => curr[0].repeat(averageLen));
};

console.log(averageLength(["aa", "bbb", "cccc"]));
//[ 'aaa', 'bbb', 'ccc' ]