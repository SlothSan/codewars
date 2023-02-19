/*
In this Kata your task will be to return the count of pairs that have consecutive numbers as follows:

pairs([1,2,5,8,-4,-3,7,6,5]) = 3
The pairs are selected as follows [(1,2),(5,8),(-4,-3),(7,6),5]
--the first pair is (1,2) and the numbers in the pair are consecutive; Count = 1
--the second pair is (5,8) and are not consecutive
--the third pair is (-4,-3), consecutive. Count = 2
--the fourth pair is (7,6), also consecutive. Count = 3. 
--the last digit has no pair, so we ignore.
More examples in the test cases.

Good luck!

Please also try Simple time difference
*/

const pairs = (array) => {
  let subArray = [];
  let count = 0;
  for (let i = 0; i < array.length; i += 2) {
    if (array[i + 1] !== undefined) {
      subArray.push([array[i], array[i + 1]]);
    }
  }
  for (let i = 0; i < subArray.length; i++) {
    let current = subArray[i][0],
      next = subArray[i][1];
    if (current === next + 1 || current === next - 1) {
      count++;
    }
  }
  return count;
};

console.log(pairs([1, 2, 5, 8, -4, -3, 7, 6, 5]));
