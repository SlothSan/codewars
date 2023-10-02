/*
Write a function that adds from two invocations.

All inputs will be integers.

add(3)(4)  // 7
add(12)(20) // 32
*/

function add(x) {
  return function (y) {
    return x + y;
  };
}

console.log(add(10)(20)); //30
