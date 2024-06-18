/* 
We need a function that receives two arrays, each of them with elements that occur only once. We need to know:

Number of elements that are present in both arrays
Number of elements that are present in only one array
Number of remaining elements in arr1 after extracting the elements of arr2
Number of remaining elements in arr2 after extracting the elements of arr1
Example
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr2 = [2, 4, 6, 8, 10, 12, 14]
The result is: [4, 8, 5, 3]

4 elements present in both arrays: 2, 4, 6, 8
8 elements present in only one array: 1, 3, 5, 7, 9, 10, 12, 14
5 elements remaning in arr1: 1, 3, 5, 7, 9
3 elements remaning in arr2: 10, 12, 14
No doubt, an easy kata to warm up before doing the more complex ones. Enjoy it!
*/

const process2Arrays = (arr1, arr2) => {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const intersection = new Set([...set1].filter((x) => set2.has(x)));

  const onlyInOneArray = new Set(
    [...set1, ...set2].filter((x) => !intersection.has(x))
  );

  const remainingInArr1 = new Set([...set1].filter((x) => !set2.has(x)));

  const remainingInArr2 = new Set([...set2].filter((x) => !set1.has(x)));

  const result = [
    intersection.size,
    onlyInOneArray.size,
    remainingInArr1.size,
    remainingInArr2.size,
  ];

  return result;
};

const arr1 = [
  33, 2, 3, 37, 38, 40, 12, 10, 43, 44, 47, 49, 8, 19, 22, 24, 26, 28, 29, 30,
];
const arr2 = [1, 34, 17, 7, 9, 10, 43, 49, 22, 27, 28];

console.log(process2Arrays(arr1, arr2));
//[ 5, 21, 15, 6 ]
