/*
Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

const sumNoDuplicates = (numList) =>
  numList
    .filter((number) => numList.indexOf(number) === numList.lastIndexOf(number))
    .reduce((acc, curr) => acc + curr, 0);

console.log(sumNoDuplicates([1, 1, 2, 3])); //5
