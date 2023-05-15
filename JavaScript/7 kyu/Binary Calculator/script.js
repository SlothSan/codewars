/*
Instructions
Output
In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.

Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string representing the binary result.

Examples:

1 + 1 === 10
10 + 10 === 100
Negative binary numbers are usually preceded by several 1's. For this kata, negative numbers can be represented with the negative symbol at the beginning of the string.

Examples of negatives:

1 - 10 === -1
10 - 100 === -10
*/

const calculate = (n1, n2, o) => {
  const num1 = parseInt(n1, 2);
  const num2 = parseInt(n2, 2);
  let result;
  switch (o) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    default:
      return "Invalid operator";
  }
  return result.toString(2);
};

console.log(calculate("1", "1", "add")); //10
