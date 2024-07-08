/* 
Following on from Part 1, part 2 looks at some more complicated array contents.

So let's try filling an array with...

...square numbers
The numbers from 1 to n*n

const squares = n => ???
squares(5) // [1, 4, 9, 16, 25]
...a range of numbers
A range of numbers starting from start and increasing by step

const range = (n, start, step) => ???
range(6, 3, 2) // [3, 5, 7, 9, 11, 13]
...random numbers
A bunch of random integers between min and max

const random = (n, min, max) => ???
random(4, 5, 10) // [5, 9, 10, 7]
...prime numbers
All primes starting from 2 (obviously)...

const primes = n => ???
primes(6) // [2, 3, 5, 7, 11, 13]
HOTE: All the above functions should take as their first parameter a number that determines the length of the returned array.
*/

const squares = (n) => Array.from({ length: n }, (_, i) => (i + 1) * (i + 1));

const range = (n, start, step) =>
  Array.from({ length: n }, (_, i) => start + i * step);

const random = (n, min, max) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
};

const primes = (n) => {
  const result = [];
  let num = 2;
  while (result.length < n) {
    if (isPrime(num)) {
      result.push(num);
    }
    num++;
  }
  return result;
};

console.log(primes(10));
/*
[
   2,  3,  5,  7, 11,
  13, 17, 19, 23, 29
]
*/
