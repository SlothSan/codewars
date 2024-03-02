/*
Create range generator function that will take up to 3 parameters - start value, step and stop value. This function should return an iterable object with numbers. For simplicity, assume all parameters to be positive numbers.

Examples:

    range(5) --> 1,2,3,4,5
    range(3, 7) --> 3,4,5,6,7
    range(2, 3, 15) --> 2,5,8,11,14
*/

//Generator function are kool
function* range(start, step, stop) {
  if (arguments.length === 1) {
    step = 1;
    stop = start;
    start = 1;
  } else if (arguments.length === 2) {
    stop = step;
    step = 1;
  }

  for (let i = start; i <= stop; i += step) {
    yield i;
  }
}

console.log(Array.from(range(2, 3, 15)));
//[ 2, 5, 8, 11, 14 ]
