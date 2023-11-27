/*
For example, if we use the system [2, 3, 5] the number n = 11 is represented by "-1--2--1-",
the number n = 23 by "-1--2--3-".

If we use the system [8, 7, 5, 3] the number n = 187 becomes "-3--5--2--1-".

You will be given a number n (n >= 0) and a system S = [m1,m2, ···,mk] and you will return a string "-x1--x2-- ...--xk-" representing the number n in the system S.

If the moduli are not pairwise co-prime or if the product m1 * ... * mk is not greater than n, return "Not applicable".
Examples:

(you can add them in the "Sample tests")

fromNb2Str(11, [2,3,5]) -> "-1--2--1-"
fromNb2Str(6, [2, 3, 4]) -> "Not applicable", since 2 and 4 are not coprime
fromNb2Str(7, [2, 3]) -> "Not applicable" since 2 * 3 < 7
*/

function gcd(a, b) {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
}

function fromNb2Str(n, sys) {
  const product = sys.reduce((acc, val) => acc * val, 1);
  if (product <= n) {
    return "Not applicable";
  }

  for (let i = 0; i < sys.length - 1; i++) {
    for (let j = i + 1; j < sys.length; j++) {
      if (gcd(sys[i], sys[j]) !== 1) {
        return "Not applicable";
      }
    }
  }

  const residues = sys.map((mod) => `-${n % mod}-`).join("");
  return residues;
}

console.log(fromNb2Str(779, [8, 7, 5, 3]));
//-3--2--4--2-
