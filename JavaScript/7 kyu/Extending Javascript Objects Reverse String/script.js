/*
Unfortunately, there's no a .reverse() method for the JavaScript String object.

Your task is to extend JavaScript String object, so you can reverse strings just like this:

'Hello, World!'.reverse();
The method should return:

'!dlroW ,olleH'
*/

Object.defineProperty(String.prototype, "reverse", {
  value() {
    return this.split("").reverse().join("");
  },
});

console.log("Up The Reds".reverse());
//sdeR ehT pU
