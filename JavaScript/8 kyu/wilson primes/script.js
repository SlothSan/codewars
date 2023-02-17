/* THIS SHOULD NOT BE AN 8 KYU!!!
Wilson primes satisfy the following condition. Let P represent a prime number.

Then,

((P-1)! + 1) / (P * P)
should give a whole number.

Your task is to create a function that returns true if the given number is a Wilson prime.
*/

const amIWilson = (p) => {
  p = BigInt(p);
  return (factorial(p - 1n) + 1n) % (p * p) == 0n;
};

const factorial = (x) => {
  if (x <= 1n) {
    return 1n;
  }
  return x * factorial(x - 1n);
};

console.log(amIWilson(5)); // true
console.log(amIWilson(6)); // false
