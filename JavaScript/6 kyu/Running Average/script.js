/*
Python:
Create a function running_average() that returns a callable function object. Update the series with each given value and calculate the current average.

r_avg = running_average()
r_avg(10) = 10.0
r_avg(11) = 10.5
r_avg(12) = 11
All input values are valid. Round to two decimal places.

This Kata is based on a example from Fluent Python book.

Javascript // Lua // C++:
Create a function runningAverage() that returns a callable function object. Update the series with each given value and calculate the current average.

rAvg = runningAverage();
rAvg(10) = 10.0;
rAvg(11) = 10.5;
rAvg(12) = 11;
*/

const runningAverage = () => {
  let total = 0;
  let count = 0;

  return function (new_value) {
    total += new_value;
    count += 1;
    return parseFloat((total / count).toFixed(2));
  };
};

const rAvgSol = runningAverage();
console.log(rAvgSol(10)); //10
console.log(rAvgSol(11)); //10.5
console.log(rAvgSol(12)); //11
