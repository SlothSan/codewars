/*
Consider the following equation of a surface S: z*z*z = x*x * y*y.
Take a cross section of S by a plane P: z = k where k is a positive integer (k > 0).
Call this cross section C(k).

Task
Find the number of points of C(k) whose coordinates are positive integers.

Examples
If we call c(k) the function which returns this number we have

c(1) -> 1
c(4) -> 4
c(4096576) -> 160
c(2019) -> 0 which means that no point of C(2019) has integer coordinates.
Notes
k can go up to about 10,000,000,000 (1e10), so mind the time complexity of your code
Prolog: the function cis called section.
COBOL: the function cis called sections.
*/

const c = (k) => {
  const n = Math.floor(Math.sqrt(k));

  // k must be a perfect square
  if (n * n !== k) return 0;

  let num = n;
  let result = 1;

  // factor 2
  let exp = 0;
  while (num % 2 === 0) {
    exp++;
    num /= 2;
  }
  if (exp > 0) result *= 3 * exp + 1;

  // factor odd primes
  for (let p = 3; p * p <= num; p += 2) {
    exp = 0;
    while (num % p === 0) {
      exp++;
      num /= p;
    }
    if (exp > 0) result *= 3 * exp + 1;
  }

  // remaining prime
  if (num > 1) {
    result *= 4;
  }

  return result;
};

console.log(c(4096576)); //160
