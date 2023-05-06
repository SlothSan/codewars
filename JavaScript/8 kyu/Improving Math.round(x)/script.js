/*
Improving Math.round(x)
Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

Math.round(3.14); // Returns 3
Math.round(17.43); // 17
Math.round(198.499); // 198
Math.round(200.5); // 201
Math.round(1784.76); // 1785
But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places? While some languages (such as PHP) has a round() function that supports rounding to a specified number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified), Javascript does not!
*/

Math.roundTo = function (number, precision) {
  let factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
};

console.log(Math.roundTo(3.1415926534, 4)); //3.1416
