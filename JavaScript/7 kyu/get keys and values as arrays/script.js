/*

*/
const keysAndValues = (data) => {
  // TODO: complete
  return [Object.keys(data), Object.values(data)];
};

console.log(keysAndValues({ a: 1, b: 2 })); // [ [ 'a', 'b' ], [ 1, 2 ] ]
