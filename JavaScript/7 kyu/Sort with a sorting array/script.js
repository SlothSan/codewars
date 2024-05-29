/*
Sort an array according to the indices in another array. It is guaranteed that the two arrays have the same size, and that the sorting array has all the required indices.

initialArray = ['x', 'y', 'z'] sortingArray = [ 1, 2, 0]

sort(initialArray, sortingArray) => ['z', 'x', 'y']

sort(['z', 'x', 'y'], [0, 2, 1]) => ['z', 'y', 'x']
*/

const sort = (initialArray, sortingArray) => {
  let sortedArray = new Array(initialArray.length);

  for (let i = 0; i < sortingArray.length; i++) {
    sortedArray[sortingArray[i]] = initialArray[i];
  }

  return sortedArray;
};

console.log(sort([1, 2, 3, 4, 5], [0, 2, 1, 4, 3]));
//[ 1, 3, 2, 5, 4 ]
