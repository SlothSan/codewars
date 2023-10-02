/* 
Mash 2 arrays together so that the returning array has alternating elements of the 2 arrays . Both arrays will always be the same length.

eg. [1,2,3] + ['a','b','c'] = [1, 'a', 2, 'b', 3, 'c']
*/

const arrayMash = (array1, array2) => {
  let concatArr = [];
  array1.forEach((val, index) => {
    concatArr.push(val, array2[index]);
  });
  return concatArr;
};

console.log(arrayMash(["h", "l", "o", "o", "l"], ["e", "l", "w", "r", "d"]));
/* 
[
  'h', 'e', 'l', 'l',
  'o', 'w', 'o', 'r',
  'l', 'd'
]
*/
