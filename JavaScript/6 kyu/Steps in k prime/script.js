/*
A natural number is called k-prime if it has exactly k prime factors, counted with multiplicity.

A natural number is thus prime if and only if it is 1-prime.

Examples of k-primes:
k = 2 -> 4, 6, 9, 10, 14, 15, 21, 22, …
k = 3 -> 8, 12, 18, 20, 27, 28, 30, …
k = 5 -> 32, 48, 72, 80, 108, 112, …
The k-prime numbers are not regularly spaced. For example: between 2 and 50 we have the following 2-primes:

[4, 6, 9, 10, 14, 15, 21, 22, 25, 26, 33, 34, 35, 38, 39, 46, 49]

The steps between two k-primes of this list are 2, 3, 1, 4, 1, 6, 1, 3, 1, 7, 1, 1, 3, 1, 7, 3.

Task
We will write a function kprimes_step(k, step, start, nd) with parameters:

k (integer > 0) which indicates the type of k-primes we are looking for,

step (integer > 0) which indicates the step we want to find between two k-primes,

start (integer >= 0) which gives the start of the search (start inclusive),

nd (integer >= start) which gives the end of the search (nd inclusive)

In the example above kprimes_step(2, 2, 0, 50) will return  [[4, 6], [33, 35]] which are the pairs of 2-primes between 2 and 50 with a 2 steps.

So this function should return an array of all the pairs (or tuples) of k-prime numbers spaced with a step of step between the limits start, nd. This array can be empty.

Note (Swift)
When there is no pair instead of returning an empty array, return nil

kprimes_step(5, 20, 0, 50) => nil
Examples:
kprimes_step(2, 2, 0, 50) => [[4, 6], [33, 35]]
kprimes_step(6, 14, 2113665, 2113889) => [[2113722, 2113736]])
kprimes_step(2, 10, 0, 50) => [[4, 14], [15, 25], [25, 35], [39, 49]]
kprimes_step(5, 20, 0, 50) => []
*/

function kprimesStep(k, step, start, nd) {
  function countPrimeFactors(n) {
    if (n < 2) return 0;
    let count = 0;
    while (n % 2 === 0) {
      count++;
      n /= 2;
    }
    let factor = 3;
    while (factor <= Math.sqrt(n)) {
      while (n % factor === 0) {
        count++;
        n /= factor;
      }
      factor += 2;
    }
    if (n > 1) count++;
    return count;
  }

  const kprimes = [];
  for (let i = start; i <= nd; i++) {
    if (countPrimeFactors(i) === k) {
      kprimes.push(i);
    }
  }

  const kprimeSet = new Set(kprimes);
  const result = [];

  for (const num of kprimes) {
    if (kprimeSet.has(num + step)) {
      result.push([num, num + step]);
    }
  }

  return result;
}

console.log(kprimesStep(6, 8, 2627371, 2627581)); //[ [ 2627408, 2627416 ], [ 2627440, 2627448 ], [ 2627496, 2627504 ] ]
