/*
um every number value in the array, and any nested arrays (to any depth).

Ignore all other types of values.


*/

const arraySum = (arr) =>
  arr
    .flat(Infinity)
    .filter((num) => !isNaN(num))
    .reduce((acc, curr) => acc + curr, 0);

console.log(arraySum([1, 2, ["pig"], 3])); //6
