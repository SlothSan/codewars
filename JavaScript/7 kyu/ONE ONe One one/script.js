/*
Write

function consecutiveOnes(nums) {}
that takes in array nums and returns the maximum consecutive 1's

For example

consecutiveOnes([1, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0]) === 3
consecutiveOnes([1, 1, 0, 0, 1]) === 2
consecutiveOnes([0, 0, 0, 0, 0]) === 0
PLEASE NOTE THAT THIS KATA HAS HEAVY PERFORMANCE TESTS AND YOU NEED OPTIMIZED CODE TO PASS IT
*/

const consecutiveOnes = (nums) => {
  let count = 0;
  let maxSeen = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
      if (count > maxSeen) maxSeen = count;
    } else {
      count = 0;
    }
  }
  return maxSeen;
};

console.log(consecutiveOnes([1, 0, 1, 1, 1]));
//3
