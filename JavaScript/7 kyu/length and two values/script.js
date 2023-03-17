// Given an integer n and two other values, build an array of size n filled with these two values alternating.

// Examples
// 5, true, false     -->  [true, false, true, false, true]
// 10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
// 0, "one", "two"    -->  []
// Good luck!

const alternate = (n, firstValue, secondValue) => {
  return Array.from({ length: n }, (_, index) =>
    !(index % 2) ? firstValue : secondValue
  );
};

console.log(alternate(5, true, false)); //[ true, false, true, false, true ]
