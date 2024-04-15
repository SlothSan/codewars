/*
This challenge is an extension of the kata of Codewars: Missing and Duplicate Number", authored by the user Uraza. (You may search for it and complete it if you have not done it)

In this kata, we have an unsorted sequence of consecutive numbers from a to b, such that a < b always (remember a, is the minimum, and b the maximum value).

They were introduced an unknown amount of duplicates in this sequence and we know that there is an only missing value such that all the duplicate values and the missing value are between a and b, but never coincide with them.

Find the missing number with the duplicate numbers (duplicates should be output in a sorted array).

Let's see an example:

arr = [10,9,8,9,6,1,2,4,3,2,5,5,3]

find_dups_miss([10,9,8,9,6,1,2,4,3,2,5,5,3]) == [7,[2,3,5,9]]

The code should be fast to process long arrays (maximum length aprox. = 1.000.000). The values for the randon tests:

500 <= a <= 50000
a + k <= b and 100 <= k <= 1000000
amount of duplicates variable, according to the length of the array
*/

const findDupsMiss = (arr) => {
  let min = Infinity;
  let max = -Infinity;
  let seen = new Set();
  let duplicates = new Set();
  let missing;

  for (let num of arr) {
    if (seen.has(num)) {
      duplicates.add(num);
    } else {
      seen.add(num);
    }
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  for (let i = min; i <= max; i++) {
    if (!seen.has(i)) {
      missing = i;
      break;
    }
  }

  return [missing, Array.from(duplicates).sort((a, b) => a - b)];
};

var arr3 = [
  24, 25, 34, 40, 38, 26, 33, 29, 50, 31, 33, 56, 35, 36, 53, 49, 57, 27, 37,
  40, 48, 44, 32, 35, 45, 52, 43, 47, 26, 51, 55, 28, 41, 42, 46, 51, 25, 30,
  44, 54,
];
console.log(findDupsMiss(arr3));
/* 
[
  39,
  [
    25, 26, 33, 35,
    40, 44, 51
  ]
]

*/
