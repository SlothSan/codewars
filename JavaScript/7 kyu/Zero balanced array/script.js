/*
An array is called zero-balanced if its elements sum to 0 and for each positive element n, there exists another element that is the negative of n. Write a function named ìsZeroBalanced that returns true if its argument is zero-balanced array, else return false. Note that an empty array will not sum to zero.
*/

const ìsZeroBalanced = (a) => {
  if (a.length === 0) return false;
  const sum = a.reduce((acc, num) => acc + num, 0);
  if (sum !== 0) return false;
  return a.every((num) => a.includes(-num)) ? true : false;
};

console.log(isZeroBalanced([1, 2, 3, -1, -2, -3]));
