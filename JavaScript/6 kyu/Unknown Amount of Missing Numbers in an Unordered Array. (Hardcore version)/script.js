/* 
We have a big list having values fom 1 to n, occurring only once but unordered with an unknown amount of missing values. The number n will be considered the maximum value of the array.

We have to output the missing numbers sorted by value. Example:

[8, 10, 11, 7, 3, 15, 6, 1, 14, 5, 12]  ---> [2, 4, 9, 13]
The number 1 should be in the input array, if it's not present in the input array, should be included in the results. See the example below.

[8, 10, 11, 7, 3, 15, 6, 14, 5, 12]  ---> [1, 2, 4, 9, 13]
As this is a hardcore version, the tests are prepared for only algorithms of time complexityO(n) to pass. As the speed of each language are different, we will have different maximum lengths for the input.

Features of the random tests:   
1000 <= length of arrays <= 30.000.000
1 <= amount of missing  numbers <= 10  
amount of tests: 20
Enjoy it.
*/

const missNumsFinder = (arr) => {
  let n = -Infinity;

  for (let num of arr) {
    if (num > n) {
      n = num;
    }
  }

  const bitset = new Uint8Array(n + 1);

  for (let num of arr) {
    bitset[num] = 1;
  }

  const result = [];
  for (let i = 1; i <= n; i++) {
    if (bitset[i] === 0) {
      result.push(i);
    }
  }

  return result;
};

console.log(missNumsFinder([7, 6, 1, 4, 9, 2, 10, 3, 8])); //[ 5 ]
