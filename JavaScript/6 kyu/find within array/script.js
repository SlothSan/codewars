/*
We'll create a function that takes in two parameters:

a sequence (length and types of items are irrelevant)
a function (value, index) that will be called on members of the sequence and their index. The function will return either true or false.
Your function will iterate through the members of the sequence in order until the provided function returns true; at which point your function will return that item's index.

If the function given returns false for all members of the sequence, your function should return -1.

var trueIfEven = function(value, index) { return (value % 2 === 0) };
findInArray([1,3,5,6,7], trueIfEven) // should === 3
*/
const findInArray = (array, iterator) =>
  array.map((value, index) => iterator(value, index)).indexOf(true);

let trueIfLengthEqualsIndex = function (v, i) {
  return v.length === i;
};
console.log(
  findInArray(
    ["one", "two", "three", "four", "five", "six"],
    trueIfLengthEqualsIndex
  )
); //4
