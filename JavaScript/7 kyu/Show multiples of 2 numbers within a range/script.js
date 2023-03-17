/*
Print all numbers up to 3rd parameter which are multiple of both 1st and 2nd parameter.

Python, Javascript, Java, Ruby versions: return results in a list/array

NOTICE:

Do NOT worry about checking zeros or negative values.
To find out if 3rd parameter (the upper limit) is inclusive or not, check the tests, it differs in each translation
*/

// Javascript: return multiples into an array
const multiples = (s1, s2, s3) => {
  let returnArr = [];
  for (let i = 1; i < s3; i++) {
    returnArr.push(i * s1);
    returnArr.push(i * s2);
  }
  returnArr = Array.from(new Set(returnArr));
  return returnArr.filter(
    (number) => number % s1 === 0 && number % s2 === 0 && number < s3
  );
};

console.log(multiples(2, 4, 40)); // [4, 8, 12, 16, 20, 24, 28, 32, 36]
