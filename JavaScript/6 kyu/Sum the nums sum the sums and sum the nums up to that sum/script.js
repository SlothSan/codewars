/*
Let's define two functions:

S(N) — sum of all positive numbers not more than N
S(N) = 1 + 2 + 3 + ... + N

Z(N) — sum of all S(i), where 1 <= i <= N
Z(N) = S(1) + S(2) + S(3) + ... + S(N)
You will be given an integer N as input; your task is to return the value of S(Z(N)).

For example, let N = 3:

Z(3n) = 1n + 3n + 6n = 10n
S(Z(3n)) = S(10n) = 55n
The input range is 1 <= N <= 10^9 and there are 80 ( 40 in LC ) test cases, of which most are random.

This is my first kata and I hope you'll enjoy it :).
Best of luck!
*/

const sumOfSums = (n) => {
  n = BigInt(n);
  const Z = (n * (n + 1n) * (n + 2n)) / 6n;
  const result = (Z * (Z + 1n)) / 2n;
  return result;
};

console.log(sumOfSums(100n)); //14740530850n
