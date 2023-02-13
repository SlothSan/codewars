/*Introduction and Warm-up (Highly recommended)
Playing With Lists/Arrays Series
Task
Given an array of integers , Find the minimum sum which is obtained from summing each Two integers product .

Notes
Array/list will contain positives only .
Array/list will always have even size
Input >> Output Examples
minSum({5,4,2,3}) ==> return (22) 
Explanation:
The minimum sum obtained from summing each two integers product ,  5*2 + 3*4 = 22
minSum({12,6,10,26,3,24}) ==> return (342)
Explanation:
The minimum sum obtained from summing each two integers product ,  26*3 + 24*6 + 12*10 = 342
minSum({9,2,8,7,5,4,0,6}) ==> return (74)
Explanation:
The minimum sum obtained from summing each two integers product ,  9*0 + 8*2 +7*4 +6*5 = 74
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou */

const rearrangeArray = (arr, length) => {
  let tempArr = new Array(length);
  let arrIndex = 0;
  arr.sort((a, b) => b - a);
  for (let i = 0, j = length - 1; i <= length / 2 || j > length / 2; i++, j--) {
    if (arrIndex < length) {
      tempArr[arrIndex] = arr[i];
      arrIndex++;
    }

    if (arrIndex < length) {
      tempArr[arrIndex] = arr[j];
      arrIndex++;
    }
  }
  return tempArr;
};

const minSum = (arr) => {
  let sum = 0;
  arr = rearrangeArray(arr, arr.length);
  for (let i = 0; i < arr.length; i += 2) {
    sum += arr[i] * arr[i + 1];
  }
  return sum;
};
