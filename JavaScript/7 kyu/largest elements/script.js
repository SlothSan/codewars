/*
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

const largest = (n, array) => {
  return array.sort((a, b) => a - b).slice(array.length - n, array.length);
};

console.log(largest(2, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[9, 10]
