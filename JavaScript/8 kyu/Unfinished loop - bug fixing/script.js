/*
Unfinished Loop - Bug Fixing #1
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/

const createArray = (number) => {
  let newArray = [];
  for (let counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }
  return newArray;
};

console.log(createArray(10));
/*
[
  1, 2, 3, 4,  5,
  6, 7, 8, 9, 10
]
*/
