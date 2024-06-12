/* 
Let's implement the range function:

range([start], stop, [step])

range(1, 11);
=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

range(1, 4, 0); // /!\ note that the step is 0
=> [1, 1, 1]

range(0);
=> []

range(10, 0); // /!\ note that the end is before the start
=> []

range(10);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

range(0, 30, 5);
=> [0, 5, 10, 15, 20, 25]
start, if omitted, defaults to 0; step defaults to 1.

Returns a list of integers from start to stop, incremented by step, exclusive.

Note that ranges that stop before they start are considered to be zero-length instead of negative.
*/

function range(...args) {
  let [start, stop, step] =
    args.length === 1
      ? [0, args[0], 1]
      : args.length === 2
      ? [args[0], args[1], 1]
      : args;

  if (step === 0) return Array(stop - start).fill(start);

  let result = [];
  for (let i = start; step > 0 ? i < stop : i > stop; i += step) {
    result.push(i);
  }
  return result;
}

console.log(range(5, 30, 5));
//[ 5, 10, 15, 20, 25 ]
