/*
Task
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"
If arr contains elements 5 and 13, function should return:

"It's a black array"
If arr contains neither 5 nor 13, function should return:

"It's a white array"
Examples
blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 
Using string template and ternary operator can make your work easier.
*/

const shiftLeft = (s, t) => {
  let i = s.length;
  let j = t.length;
  while (i >= 0 && j >= 0 && s[i] == t[j]) {
    i--;
    j--;
  }
  return i + 1 + (j + 1);
};

console.log(shiftLeft("test", "yes"));
//7
