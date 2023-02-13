/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/
const sumOfIntegersInString = (s) => {
  let regex = /([0-9])+/g;
  return regex.test(s)
    ? s
        .match(regex)
        .map((number) => Number(number))
        .reduce((accumlator, currentValue) => accumlator + currentValue)
    : 0;
};

console.log(sumOfIntegersInString("12.4"));
