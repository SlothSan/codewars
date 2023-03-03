/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None if:

sum < 0
difference < 0
Either of the calculated ages come out to be negative
*/

const getAges = (sum, difference) => {
  if (sum <= 0 || difference <= 0) return null;
  let result = [sum / 2 + difference / 2, sum / 2 - difference / 2];
  return result[0] < 0 || result[1] < 0 ? null : result;
};

console.log(getAges(24, 4)); //[14, 10 ]
