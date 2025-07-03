/* 
Write a function to shuffle an array.

Ex.:

Input: [1,2,3,4]
Output: [3,1,4,2]
Assume input is array.

Hint: Math.random()

http://devdocs.io/javascript/global_objects/math/random


*/

const shuffle = (arr) => {
  let index = arr.length;

  while (index !== 0) {
    let randomIndex = Math.floor(Math.random() * index);
    index--;

    [arr[index], arr[randomIndex]] = [arr[randomIndex], arr[index]];
  }
  return arr;
};

console.log(shuffle([1, 2, 3, 4]));
//[ 4, 2, 3, 1 ]
