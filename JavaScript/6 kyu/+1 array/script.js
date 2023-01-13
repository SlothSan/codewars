/* Given an array of integers of any length, return an array that has 1 added to the value represented by the array.

the array can't be empty
only non-negative, single digit integers are allowed
Return nil (or your language's equivalent) for invalid inputs.

Examples
Valid arrays

[4, 3, 2, 5] would return [4, 3, 2, 6]
[1, 2, 3, 9] would return [1, 2, 4, 0]
[9, 9, 9, 9] would return [1, 0, 0, 0, 0]
[0, 1, 3, 7] would return [0, 1, 3, 8]

Invalid arrays

[1, -9] is invalid because -9 is not a non-negative integer

[1, 2, 33] is invalid because 33 is not a single-digit integer */

const convertToNumber = (number) => {
  return Number(number);
};

const upArray = (arr) => {
  //if array empty return it.
  let leadingZeroCount = 0;
  let max = 0; 
  let firstArr = [];
  let secondArr = [];
  if (arr === []) {
    return arr;
  }
  //Iterate through the array, if any values are negative or greater than 9 return null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > 9) {
      return (arr = null);
    }
    //detect leading zero's and count them to add them back later.
    if(max < 1 && arr[i] < 1) {
      leadingZeroCount++;
    }
    max = arr[i];
  }
  //If null coniditions are met return it. 
  if (arr === null) {
    return arr;
  }
  //Handle large arrays by splitting them before doing maths on them dur to int limitations
  if (arr.length > 9) {
    for (let i = 0; i < arr.length; i++) {
      if (i <= 9) {
        firstArr.push(arr[i]);
      } else {
        secondArr.push(arr[i]);
      }
    }
    secondArr = parseInt(secondArr.join("")) + 1;
    secondArr = Array.from(String(secondArr), convertToNumber);
    for (let j = 0; j < secondArr.length; j++) {
      firstArr.push(secondArr[j]);
    }
    arr = firstArr;
  } else  {
    //Handle smaller arrays
    arr = parseInt(arr.join("")) + 1;
    console.log(typeof arr);
    arr = Array.from(String(arr), convertToNumber);
  }
  //Add leading 0's back.
  if(leadingZeroCount > 0) {
    for(let i = 0; i < leadingZeroCount; i++) {
      arr.unshift(0);
    }
  }
  return arr;
};

console.log(upArray([0, 4, 3, 2, 0]));
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// );
// console.log(upArray([0, 7])) // Should return 08
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// );
// console.log(upArray([1, -9])); //Should return null
// console.log(upArray([1, 10])); // should return null
// console.log(parseInt("12345678901234567890", 10)); // WHY IS THIS 12345678901234567000 ?
