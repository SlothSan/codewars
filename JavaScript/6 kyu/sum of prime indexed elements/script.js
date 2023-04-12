/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!

If you like this Kata, try:

Dominant primes. It takes this idea a step further.

Consonant value
*/

const testPrime = (n) => {
  if (n === 1 || n === 0) {
    return false;
  } else if (n === 2) {
    return true;
  } else {
    for (let x = 2; x < n; x++) {
      if (n % x === 0) {
        return false;
      }
    }
    return true;
  }
};

const total = (arr) =>
  arr
    .filter((num, index) => testPrime(index))
    .reduce((acc, curr) => acc + curr, 0);

console.log(total([1, 2, 3, 4, 5, 6])); //13
