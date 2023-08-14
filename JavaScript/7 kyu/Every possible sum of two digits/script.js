/*
Given a long number, return all the possible sum of two digits of it.

For example, 12345: all possible sum of two digits from that number are:

[ 1 + 2, 1 + 3, 1 + 4, 1 + 5, 2 + 3, 2 + 4, 2 + 5, 3 + 4, 3 + 5, 4 + 5 ]
Therefore the result must be:

[ 3, 4, 5, 6, 5, 6, 7, 7, 8, 9 ]
*/

const digits = (num) => {
  let results = [];
  num = String(num);
  for (let i = 0; i < num.length - 1; i++) {
    let current = num[i];
    for (let j = i + 1; j < num.length; j++) {
      results.push(Number(current) + Number(num[j]));
    }
  }
  return results;
};

console.log(digits(81596));
/*
[
   9, 13, 17, 14,  6,
  10,  7, 14, 11, 15
]
*/
