/*
Create a function that lets people easily grab only the array elements with given keys.

For example:

var array = ['a', 'b', 'c', 'd', 'e'];
array2 = array.only([0, 3]);
// at this point array2 should be ['a', 'd']

Note: The order of the elements should be preserved in the resulting array.
 */

Array.prototype.only = function(keys) {
let sortedKeys = [...keys].sort((a, b) => a - b)
let arr = [];
for(let i = 0; i < sortedKeys.length; i++) {
    arr.push(this[sortedKeys[i]]);
}
return arr;
}
console.log(['a', 'b', 'c', 'd', 'e'].only([0, 4, 1, 3, 2])) //[ 'a', 'b', 'c', 'd', 'e' ]
