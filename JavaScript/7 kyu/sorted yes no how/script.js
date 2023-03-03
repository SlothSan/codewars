/*
Complete the method which accepts an array of integers, and returns one of the following:

"yes, ascending" - if the numbers in the array are sorted in an ascending order
"yes, descending" - if the numbers in the array are sorted in a descending order
"no" - otherwise
You can assume the array will always be valid, and there will always be one correct answer.
*/

const equalsCheck = (a, b) => {
  return JSON.stringify(a) === JSON.stringify(b);
};

const isSortedAndHow = (array) => {
  let asc = [...array].sort((a, b) => a - b);
  let desc = [...array].sort((a, b) => b - a);
  return equalsCheck(asc, array)
    ? "yes, ascending"
    : equalsCheck(desc, array)
    ? "yes, descending"
    : "no";
};

console.log(isSortedAndHow([1, 2]));
