/*
The number 1035 is the smallest integer that exhibits a non frequent property: one its multiples, 3105 = 1035 * 3, has its same digits but in different order, in other words, 3105, is one of the permutations of 1035.

The number 125874 is the first integer that has this property when the multiplier is 2, thus: 125874 * 2 = 251748

Make the function search_perm_mult(), that receives an upper bound, n_max and a factor k and will output the amount of pairs bellow n_max that are permuted when an integer of this range is multiplied by k. The pair will be counted if the multiple is less than n_max, too

Let'see some cases:

search_perm_mult(10000, 7) === 1 # because we have the pair 1359, 9513
search_perm_mult(5000, 7) === 0 # no pairs found, as 9513 > 5000

search_perm_mult(10000, 4) === 2 # we have two pairs (1782, 7128) and (2178, 8712)
search_perm_mult(8000, 4) === 1 # only the pair (1782, 7128) 

search_perm_mult(5000, 3) === 1 # only the pair (1035, 3105)
search_perm_mult(10000, 3) === 2 # found pairs (1035, 3105) and (2475, 7425)
Features of the random Tests:

10000 <= n_max <= 100000
3 <= k <= 7
Enjoy it and happy coding!!
*/

const arePermutations = (num1, num2) => {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) return false;
  const count = {};
  for (let char of str1) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of str2) {
    if (!count[char]) return false;
    count[char]--;
  }
  return true;
};

const search_permMult = (n_max, k) => {
  let count = 0;
  for (let a = 1; a * k < n_max; a++) {
    let b = a * k;
    if (arePermutations(a, b)) {
      count++;
    }
  }
  return count;
};

console.log(search_permMult(10000, 3)); //2
