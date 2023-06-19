/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

const logs = (x, a, b) => {
  return Math.log(a * b) / Math.log(x);
};

console.log(logs(10, 2, 3)); //0.7781512503836434
