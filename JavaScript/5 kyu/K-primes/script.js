/*
A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity. For example:

k = 2  -->  4, 6, 9, 10, 14, 15, 21, 22, ...
k = 3  -->  8, 12, 18, 20, 27, 28, 30, ...
k = 5  -->  32, 48, 72, 80, 108, 112, ...
A natural number is thus prime if and only if it is 1-prime.

Task:
Complete the function count_Kprimes (or countKprimes, count-K-primes, kPrimes) which is given parameters k, start, end (or nd) and returns an array (or a list or a string depending on the language - see "Solution" and "Sample Tests") of the k-primes between start (inclusive) and end (inclusive).

Example:
countKprimes(5, 500, 600) --> [500, 520, 552, 567, 588, 592, 594]
Notes:

The first function would have been better named: findKprimes or kPrimes :-)
In C some helper functions are given (see declarations in 'Solution').
For Go: nil slice is expected when there are no k-primes between start and end.
Second Task: puzzle (not for Shell)
Given a positive integer s, find the total number of solutions of the equation a + b + c = s, where a is 1-prime, b is 3-prime, and c is 7-prime.

Call this function puzzle(s).

Examples:
puzzle(138)  -->  1  because [2 + 8 + 128] is the only solution
puzzle(143)  -->  2  because [3 + 12 + 128] and [7 + 8 + 128] are the solutions
*/

const factors = (n) => {
  let primeFactors = 0;
  let prime = 2;
  while (prime * prime <= n) {
    while (n % prime === 0) {
      primeFactors++;
      n /= prime;
    }
    prime++;
  }
  if (n > 1) {
    primeFactors++;
  }
  return primeFactors;
};

const countKprimes = (k, start, end) => {
  const result = [];
  for (let i = start; i <= end; i++) {
    if (factors(i) === k) {
      result.push(i);
    }
  }
  return result;
};

const puzzle = (s) => {
  const a = countKprimes(1, 0, s);
  const b = countKprimes(3, 0, s);
  const c = countKprimes(7, 0, s);

  let count = 0;
  for (let x of a) {
    for (let y of b) {
      for (let z of c) {
        if (x + y + z === s) {
          count++;
        }
      }
    }
  }
  return count;
};

console.log(countKprimes(2, 0, 100));
/*
[
   4,  6,  9, 10, 14, 15, 21, 22, 25,
  26, 33, 34, 35, 38, 39, 46, 49, 51,
  55, 57, 58, 62, 65, 69, 74, 77, 82,
  85, 86, 87, 91, 93, 94, 95
]
*/
