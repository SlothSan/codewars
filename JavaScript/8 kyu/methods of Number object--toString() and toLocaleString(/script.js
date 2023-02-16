/*
Task
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.

Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.

the color code should starting with "#". and then use 2 characters per color.

for example:

colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203" 
*/

const rgbToHex = (color) => {
  let hex = color.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
};
const colorOf = (r, g, b) => {
  return `#${rgbToHex(r)}${rgbToHex(g)}${rgbToHex(b)}`;
};

console.log(colorOf(1, 2, 3)); // #010203
