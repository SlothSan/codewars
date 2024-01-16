/*
Reverse and invert all integer values in a given list.

reverse_invert([1,12,'a',3.4,87,99.9,-42,50,5.6]) = [-1,-21,-78,24,-5]
Remove all types other than integer.
*/

const reverseInvert = (array) => {
  const integers = array.filter((value) => Number.isInteger(value));
  const result = integers.map((value) => {
    const reversed = parseInt(
      Math.abs(value).toString().split("").reverse().join("")
    );
    return value >= 0 ? -reversed : reversed;
  });
  return result;
};

console.log(reverseInvert([1, 12, "a", 3.4, 87, 99.9, -42, 50, 5.6]));

//[ -1, -21, -78, 24, -5 ]
