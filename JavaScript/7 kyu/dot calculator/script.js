/*
Dot Calculator
You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

+ Addition
- Subtraction
* Multiplication
// Integer Division
Your Work (Task)
You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.

Examples (Input => Output)
* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/

const dotCalculator = (equation) => {
  equation = equation.split(" ");
  let operator = equation[1];
  if (operator === "+") {
    return `${equation[0]}${equation[2]}`;
  } else if (operator === "-") {
    return `${equation[0].slice(equation[2].length)}`;
  } else if (operator === "*") {
    return `${equation[0].repeat(equation[2].length)}`;
  } else if (operator === "//") {
    let result = equation[0].length / equation[2].length;
    return ".".repeat(result);
  }
};

console.log(dotCalculator("..... + ...............")); //....................
