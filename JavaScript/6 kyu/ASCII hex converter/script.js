/*
Write a module Converter that can take ASCII text and convert it to hexadecimal. The class should also be able to take hexadecimal and convert it to ASCII text. To make the conversion well defined, each ASCII character is represented by exactly two hex digits, left-padding with a 0 if needed. The conversion from ascii to hex should produce lowercase strings (i.e. f6 instead of F6).

Example
Converter.toHex("Look mom, no hands")
=> "4c6f6f6b206d6f6d2c206e6f2068616e6473"

Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473")
=> "Look mom, no hands"
*/

var Converter = {
  toAscii: function (hex) {
    hex = hex.toString();
    var str = "";
    for (let n = 0; n < hex.length; n += 2) {
      str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
    }
    return str;
  },
  toHex: function (ascii) {
    let arr1 = [];
    for (let n = 0, l = ascii.length; n < l; n++) {
      var hex = Number(ascii.charCodeAt(n)).toString(16);
      arr1.push(hex);
    }
    return arr1.join("");
  },
};

console.log(Converter.toHex("Hello World")); //48656c6c6f20576f726c64
console.log(Converter.toAscii("48656c6c6f20576f726c64")); //Hello World
