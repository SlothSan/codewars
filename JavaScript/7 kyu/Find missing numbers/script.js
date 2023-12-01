/* 
You will get an array of numbers.

Every preceding number is smaller than the one following it.

Some numbers will be missing, for instance:

[-3,-2,1,5] //missing numbers are: -1,0,2,3,4
Your task is to return an array of those missing numbers:

[-1,0,2,3,4]
*/

const findMissingNumbers = (arr) => {
  const missingNumbers = [];

  for (let i = 0; i < arr.length - 1; i++) {
    const diff = arr[i + 1] - arr[i];
    if (diff > 1) {
      for (let j = 1; j < diff; j++) {
        missingNumbers.push(arr[i] + j);
      }
    }
  }
  return missingNumbers;
};

console.log(findMissingNumbers([-3, -2, 1, 4]));
//[ -1, 0, 2, 3 ]
