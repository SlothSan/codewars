/*
Write a function that returns a (custom) FizzBuzz sequence of the numbers 1 to 100.

The function should be able to take up to 4 arguments:

The 1st and 2nd arguments are strings, "Fizz" and "Buzz" by default;
The 3rd and 4th arguments are integers, 3 and 5 by default.
Thus, when the function is called without arguments, it will return the classic FizzBuzz sequence up to 100:

[ 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, ... 14, "FizzBuzz", 16, 17, ... 98, "Fizz", "Buzz" ]
When the function is called with (up to 4) arguments, it should return a custom FizzBuzz sequence, for example:

('Hey', 'There')      -->  [ 1, 2, "Hey", 4, "There", "Hey", ... ]
('Foo', 'Bar', 2, 3)  -->  [ 1, "Foo", "Bar", "Foo", 5, "FooBar", 7, ... ]
*/

const fizzBuzzCustom = (
  stringOne = "Fizz",
  stringTwo = "Buzz",
  numOne = 3,
  numTwo = 5
) => {
  let result = [];
  for (let i = 1; i <= 100; i++) {
    if (i % numOne === 0 && i % numTwo === 0) {
      result.push(`${stringOne}${stringTwo}`);
    } else if (i % numTwo === 0) {
      result.push(stringTwo);
    } else if (i % numOne === 0) {
      result.push(stringOne);
    } else {
      result.push(i);
    }
  }
  return result;
};

console.log(fizzBuzzCustom());
/*
[
  1,      2,      'Fizz',     4,      'Buzz', 'Fizz',
  7,      8,      'Fizz',     'Buzz', 11,     'Fizz',
  13,     14,     'FizzBuzz', 16,     17,     'Fizz',
  19,     'Buzz', 'Fizz',     22,     23,     'Fizz',
  'Buzz', 26,     'Fizz',     28,     29,     'FizzBuzz',
  31,     32,     'Fizz',     34,     'Buzz', 'Fizz',
  37,     38,     'Fizz',     'Buzz', 41,     'Fizz',
  43,     44,     'FizzBuzz', 46,     47,     'Fizz',
  49,     'Buzz', 'Fizz',     52,     53,     'Fizz',
  'Buzz', 56,     'Fizz',     58,     59,     'FizzBuzz',
  61,     62,     'Fizz',     64,     'Buzz', 'Fizz',
  67,     68,     'Fizz',     'Buzz', 71,     'Fizz',
  73,     74,     'FizzBuzz', 76,     77,     'Fizz',
  79,     'Buzz', 'Fizz',     82,     83,     'Fizz',
  'Buzz', 86,     'Fizz',     88,     89,     'FizzBuzz',
  91,     92,     'Fizz',     94,     'Buzz', 'Fizz',
  97,     98,     'Fizz',     'Buzz'
]
*/
