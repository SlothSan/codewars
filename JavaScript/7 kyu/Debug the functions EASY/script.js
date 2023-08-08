/*
Should be easy, begin by looking at the code. Debug the code and the functions should work.

There are three functions: Multiplication (x) Addition (+) and Reverse (!esreveR)
*/

function multi(arr) {
  return arr.reduce((acc, curr) => acc * curr);
}
function add(arr) {
  return arr.reduce((acc, curr) => acc + curr);
}
function reverse(str) {
  return str.split("").reverse().join("");
}

console.log(multi([5, 1, 5]), add([5, 1, 5]), reverse("test"));
//25 11 tset
