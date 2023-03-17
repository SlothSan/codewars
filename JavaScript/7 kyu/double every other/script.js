/* 
Write a function that doubles every second integer in a list, starting from the left.

Example:

For input array/list :

[1,2,3,4]
the function should return :

[1,4,3,8]
*/

const doubleEveryOther = (a) => {
  return a.map((element, index) => (index % 2 !== 0 ? element * 2 : element));
};

console.log(doubleEveryOther([1, 2, 3, 4])); //1,4,3,8
