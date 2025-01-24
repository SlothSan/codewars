/*
Your task is to extend JavaScript Array object, with methods .first() and .last(), so you can get respectively first or last element of the array.

var a = [2, 5, 7, 3 ,4];

a.first();  // 2
a.last();   // 4
Note: in case of empty array, methods should return undefined.
*/

Object.defineProperty(Array.prototype, "first", {
  value: function () {
    return [].concat(this)[0];
  },
});

Object.defineProperty(Array.prototype, "last", {
  value: function () {
    return [].concat(this)[this.length - 1];
  },
});

const arr = [1, 2, 3, 4, 5];
console.log(arr.first());
console.log(arr.last());
/* 
1
5
*/
