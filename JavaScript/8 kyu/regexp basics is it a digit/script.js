/*
Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.
*/

String.prototype.digit = function () {
  return /^\d$/.test(this);
};

console.log("1".digit()); //true
console.log("123".digit()); //false
