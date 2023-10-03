/*
You have to create a method "compoundArray" which should take as input two int arrays of different length and return one int array with numbers of both arrays shuffled one by one.

Input - {1,2,3,4,5,6} and {9,8,7,6} 
Output - {1,9,2,8,3,7,4,6,5,6}
*/

const compoundArray = (a, b) => {
  let minLength = Math.min(a.length, b.length);
  let excessArr =
    minLength === a.length ? b.slice(minLength) : a.slice(minLength);
  let concatArr = [];
  for (let i = 0; i < minLength; i++) {
    concatArr.push(a[i]);
    concatArr.push(b[i]);
  }
  return concatArr.concat(excessArr);
};

console.log(compoundArray([11, 12], [21, 22, 23, 24]));
//[ 11, 21, 12, 22, 23, 24 ]
