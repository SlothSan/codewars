/*
Assume we take a number x and perform any one of the following operations:

a) Divide x by 3 (if it is divisible by 3), or
b) Multiply x by 2
After each operation, we write down the result. If we start with 9, we can get a sequence such as:

[9,3,6,12,4,8] -- 9/3=3 -> 3*2=6 -> 6*2=12 -> 12/3=4 -> 4*2=8
You will be given a shuffled sequence of integers and your task is to reorder them so that they conform to the above sequence. There will always be an answer.

For the above example:
solve([12,3,9,4,6,8]) = [9,3,6,12,4,8].
More examples in the test cases. Good luck!
*/

const solve = (arr) => {
  const n = arr.length;
  const set = new Set(arr);
  for (let num of arr) {
    let x = num;
    while (true) {
      if (set.has(x * 3)) x *= 3;
      else if (x % 2 === 0 && set.has(x / 2)) x /= 2;
      else break;
    }
    let seq = [x];
    while (seq.length < n) {
      let last = seq[seq.length - 1];
      if (last % 3 === 0 && set.has(last / 3)) seq.push(last / 3);
      else if (set.has(last * 2)) seq.push(last * 2);
      else break;
    }
    if (seq.length === n) return seq;
  }
};

console.log(solve([558, 744, 1488, 279, 2232, 1116])); //[ 279, 558, 1116, 2232, 744, 1488 ]
