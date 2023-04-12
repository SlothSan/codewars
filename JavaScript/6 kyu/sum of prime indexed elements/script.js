/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

Good luck!

If you like this Kata, try:

Dominant primes. It takes this idea a step further.

Consonant value
*/

const testPrime = (n) => {
  for (let i = 2; i <= n ** 0.5; i++) {
    if (!(n % i)) return false;
  }
  return n > 1;
};

const total = (arr) =>
  arr
    .filter((num, index) => testPrime(index))
    .reduce((acc, curr) => acc + curr, 0);

console.log(total([1, 2, 3, 4, 5, 6])); //13
