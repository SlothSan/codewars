/*
Implement a function move_zeros which takes two arguments first an array of numbers arrNum and second a Boolean value isRight (default is true) and returns the array with all zero to right if isRight is true else to left if isRight is false.

Example:

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum, true) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum, false) //=> returns [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]

arrNum = [12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0];
move_zeros(arrNum) //=> returns [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]
Tips: Order of other numbers should not change.
*/

const move_zeros = (arrNum, isRight) => {
  let zerosArr = arrNum.filter((num) => num === 0);
  arrNum = arrNum.filter((num) => num !== 0);
  return isRight || isRight === undefined
    ? arrNum.concat(zerosArr)
    : zerosArr.concat(arrNum);
};

console.log(move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true));
/*
[
  12, 10,  8, 12, 7, 6,
   4, 10, 12,  0, 0, 0,
   0
]
*/
