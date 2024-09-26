/*
You are given two positive integers a and b (a < b <= 20000). Complete the function which returns a list of all those numbers in the interval [a, b) whose digits are made up of prime numbers (2, 3, 5, 7) but which are not primes themselves.

Be careful about your timing!

Good luck :)

Check my other katas:
*/

const notPrimes = (a, b) =>
  [...Array(b - a).keys()]
    .map((n) => n + a)
    .filter((n) => /^[2357]+$/.test(n) && !isPrime(n));

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2, sqrt = Math.sqrt(n); i <= sqrt; i++)
    if (n % i === 0) return false;
  return true;
};

console.log(notPrimes(2, 222));
/*
[
  22, 25, 27, 32, 33,
  35, 52, 55, 57, 72,
  75, 77
]
*/
