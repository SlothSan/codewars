/*
Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.
*/

const logs = (x, a, b) => {
  const logA = Math.log(a) / Math.log(x);
  const logB = Math.log(b) / Math.log(x);
  return logA + logB;
};

console.log(logs(10, 2, 3)); //0.7781512503836434
