/*
Dan likes to find the nth power of number. But he doesn't like it when the result is odd!

Return the nth power of each number, unless the result is odd, in which case round the result to the nearest 10.

Eg. if number = 7, and power = 2, result = 50.
*/

const danspower = (num, power) => {
  const result = Math.pow(num, power);
  if (result % 2 !== 0) {
    return Math.round(result / 10) * 10;
  }
  return result;
};

console.log(danspower(9, 2)); //80
