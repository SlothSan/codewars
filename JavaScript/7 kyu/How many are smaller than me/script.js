/*
Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]
If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
*/

const smaller = (nums) => {
  const n = nums.length;
  const result = Array(n).fill(0);

  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        result[i]++;
      }
    }
  }
  return result;
};

console.log(smaller([5, 4, 3, 2, 1])); //[ 4, 3, 2, 1, 0 ]
