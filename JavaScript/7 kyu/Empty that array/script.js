/*
Today's task is to write a function empty(), which take an array as argument. This function should return the same array, but empty.

To make it even more fun, you are not allowed to use any kind of loop (nor recursion)

Good luck!
*/

function empty(arr) {
  arr.splice(0, arr.length);
  return arr;
}

console.log(empty([1, 2, 3, 4])); //[]
