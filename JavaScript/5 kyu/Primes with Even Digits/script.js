/*
Find the closest prime number under a certain integer n that has the maximum possible amount of even digits.

For n = 1000, the highest prime under 1000 is 887, having two even digits (8 twice)

Naming f(), the function that gives that prime, the above case and others will be like the following below.

f(1000) ---> 887 (even digits: 8, 8)

f(1210) ---> 1201 (even digits: 2, 0)

f(10000) ---> 8887

f(500) ---> 487

f(487) ---> 467
Features of the random tests:

Number of tests = 28
1000 <= n <= 5000000
Enjoy it!!
*/

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
};

const countEvenDigits = (num) =>
  (num.toString().match(/[02468]/g) || []).length;

const f = (n) => {
  let maxEvenDigits = -1,
    bestPrime = -1;
  for (let i = n - 1; i > 1; i--) {
    if (isPrime(i)) {
      let evenDigitCount = countEvenDigits(i);
      if (evenDigitCount > maxEvenDigits) {
        maxEvenDigits = evenDigitCount;
        bestPrime = i;
      }
      if (maxEvenDigits === i.toString().length) break;
    }
  }
  return bestPrime;
};

console.log(f(1000));
//887
