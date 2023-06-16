/*
Be Concise IV - Index of an element in an array
Task
Provided is a function Kata which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 161) You may assume that all array elements are unique.
*/

const find = (a, e) => {
  let i = a.indexOf(e);
  return i > -1 ? i : "Not found";
};

console.log(find([1, 2, 3, 4, 5, 6], 6)); //5
