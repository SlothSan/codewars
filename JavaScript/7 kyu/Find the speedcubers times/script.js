/*
In the majority of Speedcubing competitions, a Cuber solves a scrambled cube 5 times, and their result is found by taking the average of the middle 3 solves (ie. the slowest and fastest times are disregarded, and an average is taken of the remaining times).

In some competitions, the unlikely event of a tie situation is resolved by comparing Cuber's fastest times.

Write a function cube_times(times) that, given an array of floats times returns an array / tuple with the Cuber's result (to 2 decimal places) AND their fastest solve.

For example:

cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1]) = [9.37, 7.6]
// Because (9.5 + 10.5 + 8.1) / 3 = 9.37 and 7.6 was the fastest solve.
Note: times will always be a valid array of 5 positive floats (representing seconds)
*/

const cubeTimes = (times) => {
  let sortedTimes = times.sort((a, b) => a - b);
  return [
    Math.round(
      (sortedTimes.slice(1, 4).reduce((acc, curr) => acc + curr, 0) / 3) * 100
    ) / 100,
    Math.min(...sortedTimes),
  ];
};

console.log(cubeTimes([9.5, 7.6, 11.4, 10.5, 8.1]));
//[ 9.37, 7.6 ]
