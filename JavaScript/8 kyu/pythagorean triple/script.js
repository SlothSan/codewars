/* */

const isPythagoreanTriple = (integers) => {
  integers = integers.sort((a, b) => a - b);
  return Math.pow(integers[0], 2) + Math.pow(integers[1], 2) ==
    Math.pow(integers[2], 2)
    ? true
    : false;
};

console.log(isPythagoreanTriple([3, 4, 5])); //true
