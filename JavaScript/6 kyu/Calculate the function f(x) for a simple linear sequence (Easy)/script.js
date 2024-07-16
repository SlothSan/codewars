/*
For any given linear sequence, calculate the function [f(x)] and return it as a string.

Assumptions for this kata are:

the sequence argument will always contain 5 values equal to f(0) - f(4).
the function will always be in the format "nx +/- m", "x +/- m", "nx', "x" or "m"
if a non-linear sequence simply return "Non-linear sequence" or Nothing in Haskell.
Examples (input -> output):
[0, 1, 2, 3, 4]   -> "f(x) = x"
[0, 3, 6, 9, 12]  -> "f(x) = 3x"
[1, 4, 7, 10, 13] -> "f(x) = 3x + 1"
[0, 0, 1, 1, 1]   -> "Non-linear sequence"
*/

const getFunction = (sequence) => {
  let differences = [];
  for (let i = 1; i < sequence.length; i++) {
    differences.push(sequence[i] - sequence[i - 1]);
  }

  if (!differences.every((val, i, arr) => val === arr[0])) {
    return "Non-linear sequence";
  }

  let a = differences[0];
  let b = sequence[0];
  let functionString = "f(x) = ";

  if (a === 0) {
    functionString += b;
  } else {
    if (a !== 1) {
      functionString += a + "x";
    } else {
      functionString += "x";
    }

    if (b !== 0) {
      if (b > 0) {
        functionString += " + " + b;
      } else {
        functionString += " - " + Math.abs(b);
      }
    }
  }

  return functionString;
};

console.log(getFunction([0, 1, 2, 3, 4]));
//f(x) = x
