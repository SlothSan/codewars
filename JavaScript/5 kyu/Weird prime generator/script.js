/*
Consider the sequence a(1) = 7, a(n) = a(n-1) + gcd(n, a(n-1)) for n >= 2:

7, 8, 9, 10, 15, 18, 19, 20, 21, 22, 33, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 69, 72, 73....

Let us take the differences between successive elements of the sequence and get a second sequence g: 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1....

For the sake of uniformity of the lengths of sequences we add a 1 at the head of g:

g: 1, 1, 1, 1, 5, 3, 1, 1, 1, 1, 11, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 23, 3, 1...

Removing the 1s gives a third sequence: p: 5, 3, 11, 3, 23, 3... where you can see prime numbers.

Task:
Write functions:

1: an(n) with parameter n: returns the first n terms of the series of a(n) (not tested)

2: gn(n) with parameter n: returns the first n terms of the series of g(n) (not tested)

3: countOnes(n) with parameter n: returns the number of 1 in the series gn(n) 
    (don't forget to add a `1` at the head) # (tested)
    
4:  p(n) with parameter n: returns an array filled with the n first distinct primes in the same order they are found in the sequence gn (not tested)

5: maxPn(n) with parameter n: returns the biggest prime number of the above p(n) # (tested)

6: anOver(n) with parameter n: returns an array (n terms) of the a(i)/i for every i such g(i) != 1 (not tested but interesting result)

7: anOverAverage(n) with parameter n: returns as an *integer* the average of anOver(n) # (tested)
Note:
You can write directly functions 3:, 5: and 7:. There is no need to write functions 1:, 2:, 4: 6: except out of pure curiosity.
*/

const gcd = (a, b) => {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const an = (n) => {
  if (n <= 0) return [];
  const A = [7];
  for (let k = 2; k <= n; k++) {
    A.push(A[k - 2] + gcd(k, A[k - 2]));
  }
  return A;
};

const gn = (n) => {
  if (n <= 0) return [];
  const A = an(n);
  const G = [1];
  for (let k = 2; k <= n; k++) {
    G.push(A[k - 1] - A[k - 2]);
  }
  return G;
};

const countOnes = (n) => gn(n).reduce((cnt, x) => cnt + (x === 1 ? 1 : 0), 0);

const isPrime = (num) => {
  if (num < 2) return false;
  if (num % 2 === 0) return num === 2;
  const lim = Math.sqrt(num);
  for (let d = 3; d <= lim; d += 2) {
    if (num % d === 0) return false;
  }
  return true;
};

const p = (n) => {
  const primes = [];
  const seen = new Set();
  let idx = 1;
  let prevA = 7;

  while (primes.length < n) {
    idx++;
    const currA = prevA + gcd(idx, prevA);
    const diff = currA - prevA;
    if (diff > 1 && !seen.has(diff) && isPrime(diff)) {
      primes.push(diff);
      seen.add(diff);
    }
    prevA = currA;
  }

  return primes;
};

const maxPn = (n) => {
  const arr = p(n);
  return arr.length ? Math.max(...arr) : null;
};

const anOver = (n) => {
  if (n <= 0) return [];
  const result = [];
  let idx = 1;
  let prevA = 7;

  while (result.length < n) {
    idx++;
    const currA = prevA + gcd(idx, prevA);
    if (currA - prevA !== 1) {
      result.push(currA / idx);
    }
    prevA = currA;
  }

  return result;
};

const anOverAverage = (n) => {
  const arr = anOver(n);
  if (!arr.length) return 0;
  const sum = arr.reduce((s, x) => s + x, 0);
  return Math.floor(sum / arr.length);
};
