/*
Write a function that returns all of the sublists of a list/array.

Example:
power([1,2,3]);=>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
For more details regarding this, see the power set entry in wikipedia.
*/

const power = (array) => {
  if (array.length === 0) return [[]];
  let x = power(array.slice(1));
  return x.concat(x.map((y) => [array[0]].concat(y)));
};

console.log(power([1, 2, 3]));
/*
[
  [],       [ 3 ],
  [ 2 ],    [ 2, 3 ],
  [ 1 ],    [ 1, 3 ],
  [ 1, 2 ], [ 1, 2, 3 ]
]
*/
