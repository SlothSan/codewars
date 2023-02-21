/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/

const getMinMax = (arr) => {
  return arr.sort((a, b) => a - b).length === 1
    ? [arr[0], arr[0]]
    : [arr[0], arr[arr.length - 1]];
};

console.log(getMinMax([1])); //[1, 1]
console.log(getMinMax([1, 2, 3])); //[1, 3]
