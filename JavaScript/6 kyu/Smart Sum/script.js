/*
Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.

smartSum(1,2,3,[4,5],6); // returns 21
smartSum(1,2,[[3,4],5],6); // returns 21
*/

const smartSum = (...args) => {
  const flatten = (arr) =>
    arr.reduce(
      (acc, curr) =>
        Array.isArray(curr) ? acc.concat(flatten(curr)) : acc.concat(curr),
      []
    );

  return flatten(args).reduce((acc, curr) => acc + curr, 0);
};

console.log(smartSum(1, 2, [3, 4], 5, [6, 7, [8, 9]], 10));
//55