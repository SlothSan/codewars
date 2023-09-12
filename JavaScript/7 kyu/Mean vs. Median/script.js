/*
Your goal is to implement the method meanVsMedian which accepts an odd-length array of integers and returns one of the following:

    'mean' - in case mean value is larger than median value
    'median' - in case median value is larger than mean value
    'same' - in case both mean and median share the same value

Reminder: Median

Array will always be valid (odd-length >= 3)
*/

const meanVsMedian = (numbers) => {
  let mean = numbers.reduce((acc, curr) => acc + curr) / numbers.length;
  let median = numbers.sort((a, b) => a - b)[Math.floor(numbers.length / 2)];
  return mean === median ? "same" : mean > median ? "mean" : "median";
};

console.log(meanVsMedian([7, 14, -60]));
//median
