/*
Define a function trim (JavaScript: method String.prototype.trim) which removes all forms of leading and trailing whitespace from a given string. Please refer to the Sample Tests for more examples.

Note: The built-in trim, trimLeft && trimRight methods has been disabled.
*/

String.prototype.trim = function () {
  let start = 0;
  while (start < this.length && /\s/.test(this[start])) {
    start++;
  }
  let end = this.length - 1;
  while (end >= 0 && /\s/.test(this[end])) {
    end--;
  }
  return this.slice(start, end + 1);
};

console.log("      HELLO        WORLD!           ".trim());
//HELLO        WORLD!
