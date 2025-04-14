/*
Primes that have only odd digits are pure odd digits primes, obvious but necessary definition. Examples of pure odd digit primes are: 11, 13, 17, 19, 31... If a prime has only one even digit does not belong to pure odd digits prime, no matter the amount of odd digits that may have.

Create a function, only_oddDigPrimes(), that receive any positive integer n, and output a list like the one below:

[number pure odd digit primes below n, largest pure odd digit prime smaller than n, smallest pure odd digit prime higher than n]

Let's see some cases:

only_oddDigPrimes(20) ----> [7, 19, 31]
///7, beacause we have seven pure odd digit primes below 20 and are 3, 5, 7, 11, 13, 17, 19
19, because is the nearest prime of this type to 20
31, is the first pure odd digit that we encounter after 20///

only_oddDigPrimes(40) ----> [9, 37, 53]
In the case that n, the given value, is a pure odd prime, should be counted with the found primes and search for the immediately below and the immediately after.

Happy coding!!
*/

const onlyOddDigPrimes = (n) => {
  function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
  }

  function hasOnlyOddDigits(num) {
    while (num > 0) {
      if ((num % 10) % 2 === 0) return false;
      num = Math.floor(num / 10);
    }
    return true;
  }

  let primes = [];
  for (let i = 2; i < n; i++) {
    if (isPrime(i) && hasOnlyOddDigits(i)) primes.push(i);
  }

  let largestBelow = primes[primes.length - 1] || -1;
  let smallestAbove = n + 1;
  while (!hasOnlyOddDigits(smallestAbove) || !isPrime(smallestAbove))
    smallestAbove++;

  return [primes.length, largestBelow, smallestAbove];
};

console.log(onlyOddDigPrimes(20));
//[ 7, 19, 31 ]
