/*
You're given two integers – n and k. n is always positive, while k >= 0. Write a function that returns first k odd digits in a number n.

The output should also be an integer.

In the following cases a function should return 0:

there are no odd digits in a number n;
k is bigger than a number of digits in n;
k = 0;
k is bigger than a number of odd digits in n.
BTW, is 0 an odd number or an even one?
*/

const findOddDigits = (n, k) => {
  if (k === 0) return 0;
  const s = String(n);
  if (k > s.length) return 0;
  let res = "";
  for (let i = 0; i < s.length && res.length < k; i++) {
    if (s[i] % 2 !== 0) {
      res += s[i];
    }
  }
  if (res.length < k) return 0;
  return Number(res);
};

console.log(findOddDigits(11111333333307, 13)); //1111133333337
