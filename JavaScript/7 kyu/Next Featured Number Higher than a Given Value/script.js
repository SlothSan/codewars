/*
Make a function that receives a value, val and outputs the smallest higher number than the given value, and this number belong to a set of positive integers that have the following properties:

their digits occur only once

they are odd

they are multiple of three

nextNumb(12) == 15

nextNumb(13) == 15

nextNumb(99) == 105

nextNumb(999999) == 1023459

nextNumber(9999999999) == "There is no possible number that
fulfills those requirements"
Enjoy the kata!!
*/

const nextNumb = (val) => {
  const hasUniqueDigits = (n) => {
    const digits = new Set(n.toString().split(""));
    return digits.size === n.toString().length;
  };

  const isMultipleOfThree = (n) => n % 3 === 0;

  let candidate = val % 2 === 0 ? val + 1 : val + 2;
  const limit = 9876543210;
  while (candidate <= limit) {
    if (isMultipleOfThree(candidate) && hasUniqueDigits(candidate)) {
      return candidate;
    }
    candidate += 2;
  }

  return "There is no possible number that fulfills those requirements";
};

console.log(nextNumb(1313)); //1329
