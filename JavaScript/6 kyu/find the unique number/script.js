/*
Write a function called findUnique which returns the only unique number from an array.

All numbers in the unsorted array are present twice, except the one you have to find. The numbers are always valid integer values between 1 and 2147483647, so no need for type and error checking. The array contains at least one number and may contain millions of numbers. So make sure your solution is optimized for speed.

Example
Input:

[ 1, 8, 4, 4, 6, 1, 8 ]
Expected output: 6
*/

const findUnique = (numbers) => {
  let unique = 0;
  for (let num of numbers) {
    unique ^= num;
  }
  return unique;
};

console.log(findUnique([1, 4, 4, 5, 5, 3, 3, 2, 2]));
//1
