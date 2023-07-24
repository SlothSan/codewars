/*
Backwards Read Primes are primes that when read backwards in base 10 (from right to left) are a different prime. (This rules out primes which are palindromes.)

Examples:
13 17 31 37 71 73 are Backwards Read Primes
13 is such because it's prime and read from right to left writes 31 which is prime too. Same for the others.

Task
Find all Backwards Read Primes between two positive given numbers (both inclusive), the second one always being greater than or equal to the first one. The resulting array or the resulting string will be ordered following the natural order of the prime numbers.

Examples (in general form):
backwardsPrime(2, 100) => [13, 17, 31, 37, 71, 73, 79, 97] backwardsPrime(9900, 10000) => [9923, 9931, 9941, 9967] backwardsPrime(501, 599) => []

See "Sample Tests" for your language.

Notes
Forth Return only the first backwards-read prime between start and end or 0 if you don't find any
Ruby Don't use Ruby Prime class, it's disabled.
*/

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

const reverseNumber = (num) => {
  return parseInt(num.toString().split("").reverse().join(""), 10);
};

const backwardsPrime = (start, end) => {
  const result = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      const reverse = reverseNumber(i);
      if (reverse !== i && isPrime(reverse)) {
        result.push(i);
      }
    }
  }

  return result;
};

console.log(backwardsPrime(9000, 10000));

/*
[
  9001, 9011, 9013, 9029, 9041, 9103,
  9127, 9133, 9161, 9173, 9209, 9221,
  9227, 9241, 9257, 9293, 9341, 9349,
  9403, 9421, 9437, 9439, 9467, 9479,
  9491, 9497, 9521, 9533, 9547, 9551,
  9601, 9613, 9643, 9661, 9679, 9721,
  9749, 9769, 9781, 9787, 9791, 9803,
  9833, 9857, 9871, 9883, 9923, 9931,
  9941, 9967
] 
*/
