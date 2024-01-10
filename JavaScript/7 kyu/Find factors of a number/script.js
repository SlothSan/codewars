/* 
Create a function that takes a number and finds the factors of it, listing them in descending order in an array.

If the parameter is not an integer or less than 1, return -1. In C# return an empty array.

For Example: factors(54) should return [54, 27, 18, 9, 6, 3, 2, 1]
*/

const factors = (x) => {
  if (x < 1 || !Number.isInteger(x)) return -1;
  let results = [];
  for (let i = x; i >= 1; i--) {
    if (Number.isInteger(x / i)) results.push(i);
  }
  return results;
};

console.log(factors(54));

/*
[
  54, 27, 18, 9,
   6,  3,  2, 1
]
*/
