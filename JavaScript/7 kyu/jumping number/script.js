/*
Definition
Jumping number is the number that All adjacent digits in it differ by 1.

Task
Given a number, Find if it is Jumping or not .

Notes
Number passed is always Positive .

Return the result as String .

The difference between ‘9’ and ‘0’ is not considered as 1 .

All single digit numbers are considered as Jumping numbers.

Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
Adjacent digits differ by 1
Playing with Numbers Series
Playing With Lists/Arrays Series
For More Enjoyable Katas
ALL translations are welcomed
Enjoy Learning !!
Zizou */

const jumpingNumber = (number) => {
  const convertToNum = (number) => Number(number);
  let numberArray = Array.from(String(number), convertToNum);
  //if length === 1 return 'Jumping!!'
  if (numberArray.length === 1) {
    return "Jumping!!";
  } else {
    //Check next number to see if its Array[i] + 1 or Array[i] - 1;
    for (let i = 0; i < numberArray.length - 1; i++) {
      let nextNumber = numberArray[i + 1];
      let upOne = numberArray[i] + 1;
      let downOne = numberArray[i] - 1;
      if (nextNumber === upOne || nextNumber === downOne) {
        continue;
      } else {
        return "Not!!";
      }
    }
  }
  return "Jumping!!";
};

console.log(jumpingNumber(9));
console.log(jumpingNumber(23));
