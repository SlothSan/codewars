/*
The number 1089 is the smallest one, non palindromic, that has the same prime factors that its reversal. Thus,

prime factorization of 1089 with 3, 3, 11, 11 -------> 3, 11

prime factorization of 9801 with  3, 3, 3, 3, 11, 11 -------> 3, 11
The task for this kata is to create a function same_factRev(), that receives a nMax, to find all the numbers with the above property, bellow nMax.

the function same_factRev(), will output a sorted list with the found numbers bellow nMax

Let'se some cases

same_factRev(1100) -----> [1089]

same_factRev(2500) -----> [1089, 2178]
(Palindromic numbers are like: 171, 454, 4224, these ones should be discarded)

Happy coding!!

(The sequence of these kind of numbers is registered in OEIS as A110819)
*/

const sameFactRev = (nMax) => {
  const res = [];
  if (nMax <= 2) return res;

  let limit = 1;
  while (limit < nMax) limit *= 10;

  const rad = new Uint32Array(limit);
  rad.fill(1);
  rad[0] = 0;

  for (let p = 2; p < limit; p++) {
    if (rad[p] === 1) {
      // p is prime
      for (let k = p; k < limit; k += p) {
        rad[k] *= p;
      }
    }
  }

  function reverseNum(x) {
    let r = 0;
    while (x > 0) {
      r = r * 10 + (x % 10);
      x = Math.floor(x / 10);
    }
    return r;
  }

  for (let n = 2; n < nMax; n++) {
    const rev = reverseNum(n);
    if (n !== rev && rad[n] === rad[rev]) {
      res.push(n);
    }
  }

  return res;
};

console.log(sameFactRev(9000));
//[ 1089, 2178, 4356, 6534, 8712 ]
