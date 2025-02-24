/*
A number is self-descriptive when the n'th digit describes the amount n appears in the number.

Example:

For the number 21200:

There are two 0's in the number, so the first digit is 2.
There is one 1 in the number, so the second digit is 1.
There are two 2's in the number, so the third digit is 2.
There are no 3's in the number, so the fourth digit is 0.
There are no 4's in the number, so the fifth digit is 0.
Numbers can be of any length up to 9 digits and are only full integers. For a given number, derive a function that returns:

True if the number is self-descriptive
False if the number is not.
*/

const selfDescriptive = (number) => {
  let numStr = number.toString();
  let count = Array(numStr.length).fill(0);

  for (let i = 0; i < numStr.length; i++) count[+numStr[i]]++;

  return [...numStr].every((digit, idx) => +digit === count[idx]);
};

console.log(selfDescriptive(22100)); //false
