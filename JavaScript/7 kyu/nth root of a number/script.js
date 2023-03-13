/*

*/

const root = (x, n) => {
  // TODO: Return nth root of x
  return Math.exp((1 / n) * Math.log(x));
};

console.log(root(256, 4)); //4
