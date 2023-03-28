/*
Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater than or equal to zero.

Good luck!
*/

const sumSquareEvenRootOdd = (ns) => {
  return (
    Math.round(
      ns
        .map((number) => {
          if (number % 2 !== 0) {
            return Math.sqrt(number);
          } else {
            return Math.pow(number, 2);
          }
        })
        .reduce((acc, curr) => acc + curr, 0) * 100
    ) / 100
  );
};

console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0])); //91.61
