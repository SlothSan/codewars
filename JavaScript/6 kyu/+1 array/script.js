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

const upArray = (arr) => {
  if (arr === []) {
    return arr;
  }
  let upArray = [];
  let max = 0;
  let leadingZeroCount = 0;
  //Iterate through the array, if any values are negative or bigger than 9 return null
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0 || arr[i] > 9) {
      return (upArray = null);
    }
    if (max < 1 && arr[i] < 1) {
      leadingZeroCount++;
    }
    max = arr[i];
  }
  if (arr.length > 12) {
    let firstArr = [];
    let secondArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i < 12) {
        firstArr.push(arr[i]);
      } else {
        secondArr.push(arr[i]);
      }
      console.log('First Arr: ', firstArr);
      console.log("secondArr: ", secondArr);
      secondArr.join("");
      secondArr = parseInt(secondArr);
      for (let j = 0; j < secondArr.length; j++) {
        firstArr.push(secondArr[j]);
      }
      return firstArr;
    }
  } else {
    arr = arr.join("");
    arr = parseInt(arr);
    arr++;
    return arr;
  }
  return arr;
  // //Catch leading 0's
  // //   console.log("0 Count: ", leadingZeroCount);
  // //   console.log(arr);
  // //   console.log(arr.join("") + 1);
  // upArray = BigInt(arr.join(""));
  // upArray = upArray + BigInt("1");
  // console.log("After +1: ", upArray);
  // upArray = upArray.toString().split("").map((number) => {return BigInt(number)});
  // //   upArray = upArray
  // //     .toString()
  // //     .split("")
  // //     .map((number) => {
  // //       return Number(number);
  // //     });

  // upArray.pop();
  // return upArray;
};

// console.log(upArray([0, 4, 3, 2, 0]));
console.log(
  upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
);
// console.log(upArray([0, 7])) // Should return 08
// console.log(
//   upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])
// );
// console.log(upArray([1, -9])); //Should return null
// console.log(upArray([1, 10])); // should return null
// console.log(parseInt("12345678901234567890", 10)); // WHY IS THIS 12345678901234567000 ?
