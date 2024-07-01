/*
Build a function sumNestedNumbers/sum_nested_numbers that finds the sum of all numbers in a series of nested arrays raised to the power of their respective nesting levels. Numbers in the outer most array should be raised to the power of 1.

For example,

sumNestedNumbers([1, [2], 3, [4, [5]]])

should return 1 + 2*2 + 3 + 4*4 + 5*5*5 === 149
*/

const sumNestedNumbers = (arr, depth = 1) => {
  return arr.reduce((sum, element) => {
    if (Array.isArray(element)) {
      return sum + sumNestedNumbers(element, depth + 1);
    } else if (typeof element === "number") {
      return sum + Math.pow(element, depth);
    }
    return sum;
  }, 0);
};

console.log(sumNestedNumbers([1, [2], 3, [4, [5]]]));
//149
