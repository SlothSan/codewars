/* 
Make a function "add" that will be able to sum elements of list continuously and return a new list of sums.

For example:

add [1,2,3,4,5] == [1, 3, 6, 10, 15], because it's calculated like 
this : [1, 1 + 2, 1 + 2 + 3, 1 + 2 + 3 + 4, 1 + 2 + 3 + 4 + 5]
If you want to learn more see https://en.wikipedia.org/wiki/Prefix_sum
*/

const add = (arr) => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let curr = arr.slice(0, i + 1);
    results.push(curr.reduce((acc, curr) => acc + curr, 0));
  }
  return results;
};

console.log(add([1, 2, 3, 4, 5]));
//[ 1, 3, 6, 10, 15 ]
