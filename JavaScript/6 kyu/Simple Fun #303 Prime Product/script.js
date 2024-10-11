/* 
Task
We know that some numbers can be split into two primes. ie. 5 = 2 + 3, 10 = 3 + 7. But some numbers are not. ie. 17, 27, 35, etc..

Given a positive integer n. Determine whether it can be split into two primes. If yes, return the maximum product of two primes. If not, return 0 instead.

Input/Output
[input] integer n

A positive integer.

0 ≤ n ≤ 100000

[output] an integer

The possible maximum product of two primes. or return 0 if it's impossible split into two primes.

Example
For n = 1, the output should be 0.

1 can not split into two primes

For n = 4, the output should be 4.

4 can split into two primes 2 and 2. 2 x 2 = 4

For n = 20, the output should be 91.

20 can split into two primes 7 and 13 or 3 and 17. The maximum product is 7 x 13 = 91
*/

const primeProduct = (n) => {
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

  // Check all pairs (p, n - p) where both p and (n - p) are primes
  let maxProduct = 0;
  for (let p = 2; p <= n / 2; p++) {
    if (isPrime(p) && isPrime(n - p)) {
      let product = p * (n - p);
      if (product > maxProduct) {
        maxProduct = product;
      }
    }
  }

  return maxProduct;
};

console.log(primeProduct(10)); //25
