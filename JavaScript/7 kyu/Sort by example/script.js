/*
Given an Array and an Example-Array to sort to, write a function that sorts the Array following the Example-Array.

Assume Example Array catalogs all elements possibly seen in the input Array. However, the input Array does not necessarily have to have all elements seen in the Example.

Example:

Arr: [1,3,4,4,4,4,5]

Example Arr: [4,1,2,3,5]

Result: [4,4,4,4,1,3,5]
*/

const exampleSort = (arr, exampleArr) => {
  const indexMap = new Map();
  exampleArr.forEach((element, index) => {
    indexMap.set(element, index);
  });

  const sortFunction = (a, b) => {
    const indexA = indexMap.has(a) ? indexMap.get(a) : Infinity;
    const indexB = indexMap.has(b) ? indexMap.get(b) : Infinity;
    return indexA - indexB;
  };

  return arr.sort(sortFunction);
};

console.log(exampleSort([1, 2, 3, 4, 5], [2, 3, 4, 1, 5]));
//[ 2, 3, 4, 1, 5 ]
