/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/

const nextBigger = (n) => {
  const digits = Array.from(String(n), Number);

  let pivot = -1;
  for (let i = digits.length - 1; i > 0; i--) {
    if (digits[i] > digits[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  if (pivot === -1) return -1;

  let next = -1;
  for (let i = digits.length; i > pivot; i--) {
    if (digits[i] > digits[pivot]) {
      next = i;
      break;
    }
  }
  [digits[pivot], digits[next]] = [digits[next], digits[pivot]];
  const sorted = digits.slice(pivot + 1).sort((a, b) => a - b);
  return parseInt([...digits.slice(0, pivot + 1), ...sorted].join(""));
};

console.log(nextBigger(2017)); //2071
