/*
Your team is really excited with all the contributions you've made to the RuplesJS library. They feel the work you're doing will truly help Ruby developers transition to Javascript! They've assigned you another task.
String.eachChar()

In ruby you can add something after each character in a string like so:

"hello".each_char {|c| print c, ' ' } -> "h e l l o " 

In the spirit of polymorphism, our eachChar method will allow one of two arguments, a callback function or a string. If a string is presented, it will be added after each character of the original string and return the new string. If a function is presented, it will perform a manipulation of each character in the string.

Example:

"hello".eachChar(" ");
-> "h e l l o "

"hello all".eachChar(function(char) {
  if (char == "l") {
    return char.toUpperCase();
  } else {
    return char;
  }
});
-> "heLLo aLL"

*/

String.prototype.eachChar = function (input) {
  if (typeof input === "string") {
    return this.split("")
      .map((char) => char + input)
      .join("");
  } else if (typeof input === "function") {
    return this.split("")
      .map((char) => input(char))
      .join("");
  }
};

console.log("Hello World!".eachChar((c) => (c == "l" ? "L" : c)));
//HeLLo WorLd!
