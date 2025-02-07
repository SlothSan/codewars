/* 
Extend the Array prototype/class with a function to return all elements of that array, except the ones with the indexes passed in the parameter.

The function should accept either an array or a single integer as parameters, like this:

var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except([1,3]);
// array2 should contain ['a', 'c', 'e']
or

var array = ['a', 'b', 'c', 'd', 'e'];
var array2 = array.except(1);
// array2 should contain ['a', 'c', 'd', 'e']
*/

Array.prototype.except = function (keys) {
  return this.filter((curr, index) =>
    typeof keys === "object" ? !keys.includes(index) : index !== keys
  );
};

console.log([1, 2, 3, 4, 5].except([0, 3])); //[ 2, 3, 5 ]
