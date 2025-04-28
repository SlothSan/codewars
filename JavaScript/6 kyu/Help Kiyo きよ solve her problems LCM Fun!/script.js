/*
Help Kiyo きよ solve her problems LCM Fun!
Kiyo has been given a series of problems and she needs your help to solve them!

You will be given a two-dimensional array such as the one below.

a = 
[
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9]
]

Remove everything but odd integers from each sub-array.

Sum the remaining odd integers of each sub-array. 

Sum of odds ( a[0] = 1 + 3 + 5 + 7 + 9 ) = 25
       
Find the Least common multiple of the arrays.

 (25, 25, 25, 25, 25, 25, 25, 25, 25)
  ^                                ^ 
  |                                |
a[0]-----------------------------a[8]

example : lcm( 25, 25, 25, 25, 25, 25, 25, 25, 25 ) = 25

example : lcm( 37, 29, 19, 38, 31, 28, 15, 24, 9 ) = 1592632440
Integers are between 0 and 9. Sub-array size is always 9. The number of sub-arrays varies between 9 and 18.

Watch out for non-integers mixed in the arrays. If all arrays are empty return 0.

https://en.wikipedia.org/wiki/Least_common_multiple
*/

const kiyoLcm = (a) => {
  if (a.every((a) => !a.length)) {
    return 0;
  }

  const gcd = (a, b) => (a ? gcd(b % a, a) : b);

  const lcm = (a, b) => (a * b) / gcd(a, b);

  return a
    .map((curr) =>
      curr
        .filter((ele) => typeof ele === "number" && ele % 2 !== 0)
        .reduce((acc, curr) => acc + curr, 0)
    )
    .reduce(lcm);
};

console.log(
  kiyoLcm([
    [6, 7, 2, 5, 1, 6, 9, 1, 4],
    [4, 4, 7, 1, 2, 9, 7, 6, 7],
    [8, 2, 7, 4, 5, 7, 1, 5, 4],
    [1, 9, 4, 8, 7, 7, 3, 1, 7],
    [9, 3, 9, 8, 1, 1, 5, 6, 7],
    [7, 4, 4, 1, 5, 8, 4, 1, 5],
    [8, 5, 5, 6, 1, 3, 7, 8, 4],
    [7, 2, 8, 6, 5, 7, 9, 5, 7],
    [9, 1, 1, 7, 9, 5, 7, 1, 9],
  ])
);

//398281800
