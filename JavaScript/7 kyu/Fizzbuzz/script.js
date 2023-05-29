/*
Return an array containing the numbers from 1 to N, where N is the parametered value.

Replace certain values however if any of the following conditions are met:

If the value is a multiple of 3: use the value "Fizz" instead
If the value is a multiple of 5: use the value "Buzz" instead
If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]
*/

const fizzbuzz = (n) => {
  return [...Array(n).keys()]
    .map((i) => i + 1)
    .map((num) => {
      if (num % 3 === 0 && num % 5 === 0) {
        return "FizzBuzz";
      } else if (num % 5 === 0) {
        return "Buzz";
      } else if (num % 3 === 0) {
        return "Fizz";
      } else {
        return num;
      }
    });
};

console.log(fizzbuzz(10));

/*
[
  1,      2,      'Fizz',
  4,      'Buzz', 'Fizz',
  7,      8,      'Fizz',
  'Buzz'
]
*/
