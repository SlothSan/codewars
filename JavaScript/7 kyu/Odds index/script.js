/*
You are given an array with several "even" words, one "odd" word, and some numbers mixed in.

Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.
*/

const oddBall = (arr) => arr.some((e) => arr[e] === "odd");

console.log(
  oddBall([
    "even",
    4,
    "even",
    7,
    "even",
    55,
    "even",
    6,
    "even",
    10,
    "odd",
    3,
    "even",
  ])
);
