/*
Write a function loopArr that loops array in a specified direction by some number of steps.

By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

Function should accept three arguments:

array - non-empty array of elements of any type;
direction - 'left' or 'right' - tells how to loop array;
steps - number of steps to loop array (less or equal to array size);
Examples:

loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
should produce result: [87, 45, 8, 8, 1, 5]

loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
should produce result: [8, 8, 1, 5, 87, 45]
*/

const loopArr = (arr, direction, steps) => {
  if (direction === "left") {
    const removed = arr.splice(0, steps);
    arr.push(...removed);
  } else if (direction === "right") {
    const removed = arr.splice(-steps);
    arr.unshift(...removed);
  }
  return arr;
};

console.log(loopArr([1, 5, 87, 45, 8, 8], "left", 2));
//[ 87, 45, 8, 8, 1, 5 ]
