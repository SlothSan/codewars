/*
Capitalize First Letter of a String
Write a function capitalize() which capitalizes the first letter (if any) of the given string. For example:

Input	Output
string	String
hello World	Hello World
i love codewars	I love codewars
This sentence is already capitalized	This sentence is already capitalized
0123the first character of this sentence is not a letter	0123the first character of this sentence is not a letter
JavaScript / CoffeeScript: Extend the String prototype with a method capitalize() so you can call it on a string like so: "string".capitalize(). Learn about inheritance and the prototype chain.

Furthermore, the built-in string methods toUpperCase() and toLowerCase() are disabled for this Kata.
*/

/*  Write your program/code/algorithm here.
 *  If you're really stuck as to what exactly to define, go to the
 *  "Description" and click on the pseudo-link to reveal the answer
 */
String.prototype.capitalize = function () {
  return (
    this.toString()[0].replace(/[a-z]/, (v) =>
      String.fromCharCode(v.charCodeAt(0) - 32)
    ) + this.toString().slice(1)
  );
};

console.log("hello world".capitalize());
