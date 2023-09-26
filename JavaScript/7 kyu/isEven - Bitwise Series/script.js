/*
Is the number even?
If the numbers is even return true. If it's odd, return false.

Oh yeah... the following symbols/commands have been disabled!

use of %
use of .even? in Ruby
use of mod in Python
*/

const isEven = (n) => {
  return (n & 1) === 0;
};

console.log(isEven(12));
