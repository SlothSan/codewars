/*
Implement a function to calculate the sum of the numerical values in a nested list. For example :

sumNested([1, [2, [3, [4]]]]) => 10
*/

const sumNested = (arr) => {
  return arr.flat(Infinity).reduce((acc, curr) => acc + curr, 0);
};

console.log(
  sumNested([
    [1, 2, 3],
    [1, 2, 3],
  ])
); //12
