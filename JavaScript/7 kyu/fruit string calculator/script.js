/*
You are given a string of words and numbers. Extract the expression including:

the operator: either addition ("gains") or subtraction ("loses")
the two numbers that we are operating on
Return the result of the calculation.

Notes:

"loses" and "gains" are the only two words describing operators
No fruit debts nor bitten apples = The numbers are integers and no negatives
Examples
"Panda has 48 apples and loses 4"  -->  44
"Jerry has 34 apples and gains 6"  -->  40
Should be a nice little kata for you :)
*/

const calculate = (string) => {
  let numbers = string.match(/[0-9]+/g).map((number) => Number(number));
  return string.includes("loses")
    ? numbers[0] - numbers[1]
    : numbers[0] + numbers[1];
};

console.log(calculate("Panda has 48 apples and loses 4")); //44
