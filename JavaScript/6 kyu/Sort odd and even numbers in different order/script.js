/*
You are given an array of integers. Your task is to sort odd numbers within the array in ascending order, and even numbers in descending order.

Note that zero is an even number. If you have an empty array, you need to return it.

For example:

[5, 3, 2, 8, 1, 4]  -->  [1, 3, 8, 4, 5, 2]

odd numbers ascending:   [1, 3,       5   ]
even numbers descending: [      8, 4,    2]
*/

const sortArray = (array) => {
  const oddNumbers = array.filter((num) => num % 2 !== 0).sort((a, b) => a - b);
  const evenNumbers = array
    .filter((num) => num % 2 === 0)
    .sort((a, b) => b - a);
  const result = [];

  let oddIndex = 0;
  let evenIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(oddNumbers[oddIndex]);
      oddIndex++;
    } else {
      result.push(evenNumbers[evenIndex]);
      evenIndex++;
    }
  }

  return result;
};

console.log(sortArray([2, 22, 37, 11, 4, 1, 5, 0]));
/*
[
  22,  4,  1, 5,
   2, 11, 37, 0
]
*/
