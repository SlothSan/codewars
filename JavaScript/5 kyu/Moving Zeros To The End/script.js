/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

const moveZeros = (arr) => {
  let zeros = [];
  let nonZeros = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeros.push(arr[i]);
    } else {
      nonZeros.push(arr[i]);
    }
  }
  return nonZeros.concat(zeros);
};

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));

/*
[
  1, 2, 1, 1, 3,
  1, 0, 0, 0, 0
]
*/
