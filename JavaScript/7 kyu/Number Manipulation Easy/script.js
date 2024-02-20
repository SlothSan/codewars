/*
For a given large number (num), write a function which returns the number with the second half of digits changed to 0.

In cases where the number has an odd number of digits, the middle digit onwards should be changed to 0.

Example:

192827764920 --> 192827000000

938473 --> 938000

2837743 --> 2830000
*/

const manipulate = (num) => {
  let numString = String(num);
  let half = numString.length / 2;
  return parseInt(
    numString.slice(0, half) + Array(Math.ceil(half)).fill(0).join("")
  );
};

console.log(manipulate(8173648710293847));
