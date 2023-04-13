/*
Create a function that will take any amount of money and break it down to the smallest number of bills as possible. Only integer amounts will be input, NO floats. This function should output a sequence, where each element in the array represents the amount of a certain bill type. The array will be set up in this manner:

array[0] ---> represents $1 bills

array[1] ---> represents $5 bills

array[2] ---> represents $10 bills

array[3] ---> represents $20 bills

array[4] ---> represents $50 bills

array[5] ---> represents $100 bills

In the case below, we broke up $365 into 1 $5 bill, 1 $10 bill, 1 $50 bill, and 3 $100 bills:

365 =>  [0,1,1,0,1,3]
In this next case, we broke $217 into 2 $1 bills, 1 $5 bill, 1 $10 bill, and 2 $100 bills:

217 => [2,1,1,0,0,2]
*/

const giveChange = (amount) => {
  let result = [0, 0, 0, 0, 0, 0];
  while (amount > 0) {
    if (amount / 100 >= 1) {
      amount -= 100;
      result[5] += 1;
      continue;
    }
    if (amount / 50 >= 1) {
      amount -= 50;
      result[4] += 1;
      continue;
    }
    if (amount / 20 >= 1) {
      amount -= 20;
      result[3] += 1;
      continue;
    }
    if (amount / 10 >= 1) {
      amount -= 10;
      result[2] += 1;
      continue;
    }
    if (amount / 5 >= 1) {
      amount -= 5;
      result[1] += 1;
      continue;
    }
    if (amount / 1 >= 0) {
      amount -= 1;
      result[0] += 1;
      continue;
    }
  }
  return result;
};

console.log(giveChange(300)); //[ 0, 0, 0, 0, 0, 3 ]
