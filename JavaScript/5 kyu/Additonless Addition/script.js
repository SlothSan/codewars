/*
Create an addition function that does not utilize the + or - operators.

Anti-cheat tests
You may not use any of these symbols: +-[].'"`

Moreover, Math, Array, eval, new Function, with and such have been disabled.
*/

const add = (x, y) => {
  while ((x & y) != 0) {
    let xor = x ^ y;
    let and = x & y;
    let shiftedAnd = and << 1;
    x = xor;
    y = shiftedAnd;
  }
  return x | y;
};

console.log(add(10, 20)); //30
