/*
Array Exchange and Reversing

It's time for some array exchange! The objective is simple: exchange the elements of two arrays in-place in a way that their new content is also reversed.

// before
const myArray = ['a', 'b', 'c'];
const otherArray = [1, 2, 3];

exchangeWith(myArray, otherArray);

// after
myArray => [3, 2, 1]
otherArray => ['c', 'b', 'a']
*/

const exchangeWith = (a, b, c = a.slice()) => {
  a.splice(0, a.length, ...b.reverse());
  b.splice(0, b.length, ...c.reverse());
};
let a = ["1", "2", "3", "4", "5", "6", "7"];
let b = ["c", "b", "a"];

exchangeWith(a, b);

console.log(a, b);
/*
[ 'a', 'b', 'c' ] [
  '7', '6', '5',
  '4', '3', '2',
  '1'
]
*/
