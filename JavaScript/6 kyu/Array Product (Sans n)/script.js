/*
Related to MrZizoScream's Product Array kata. You might want to solve that one first :)

This is an adaptation of a problem I came across on LeetCode.

Given an array of numbers, your task is to return a new array where each index (new_array[i]) is equal to the product of the original array, except for the number at that index (array[i]).

Two things to keep in mind:

Zeroes will be making their way into some of the arrays you are given
O(n²) solutions will not pass.
All input arrays will be valid arrays of nonzero length.

Examples:
[1, 2, 3, 4]              => [24, 12, 8, 6]
[2, 3, 4, 5]              => [60, 40, 30, 24]
[1, 1, 1]                 => [1, 1, 1]
[9, 0, -2]                => [0, -18, 0]
[0, -99, 0]               => [0, 0, 0]
[3, 14, 9, 11, 11]        => [15246, 3267, 5082, 4158, 4158]
[-8, 1, 5, 13, -1]        => [-65, 520, 104, 40, -520]
[4, 7, 3, 6, 2, 14, 7, 5] => [123480, 70560, 164640, 82320, 246960, 35280, 70560, 98784]
Have fun! Please upvote if you enjoyed :)
*/

const productSansN = (nums) => {
  let totalProduct = BigInt(1);
  let zeroCount = 0;
  let zeroIndex = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      zeroIndex = i;
      if (zeroCount > 1) return new Array(nums.length).fill("0");
    } else {
      totalProduct *= BigInt(nums[i]);
    }
  }

  if (zeroCount === 1) {
    return nums.map((_, i) =>
      i === zeroIndex ? totalProduct.toString() : "0"
    );
  }

  return nums.map((num) => (totalProduct / BigInt(num)).toString());
};

console.log(productSansN([1, 2, 3, 4]));
//[ '24', '12', '8', '6' ]
