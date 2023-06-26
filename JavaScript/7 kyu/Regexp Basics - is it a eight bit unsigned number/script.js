/*
Implement String#eight_bit_number?, which should return true if given object is a number representable by 8 bit unsigned integer (0-255), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/

String.prototype.eightBitNumber = function () {
  const pattern = /^(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]\d|\d)$/;
  return pattern.test(this);
};

console.log("55".eightBitNumber()); //true
