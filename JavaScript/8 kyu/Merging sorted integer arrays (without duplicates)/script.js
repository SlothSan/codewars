/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/

const mergeArrays = (a, b) => [...new Set(a.concat(b))].sort((a, b) => a - b);

console.log(mergeArrays([1, 2, 3], [1, 2, 3, 6, 5, 4])); //[ 1, 2, 3, 4, 5, 6 ]
