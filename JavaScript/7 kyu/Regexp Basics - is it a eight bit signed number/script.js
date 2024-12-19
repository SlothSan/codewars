/*
Implement:

String.prototype.signedEightBitNumber()
which should return true if given object is a number representable by 8 bit signed integer (-128 to -1 or 0 to 127), false otherwise.

It should only accept numbers in canonical representation, so no leading +, extra 0s, spaces etc.
*/

String.prototype.signedEightBitNumber = function () {
  return /^(?:-128|-12[0-7]|-1[0-1]\d|-[1-9]\d?|0|[1-9]\d?|1[0-1]\d|12[0-7])$/g.test(
    this
  );
};

console.log("-128".signedEightBitNumber());
// true
