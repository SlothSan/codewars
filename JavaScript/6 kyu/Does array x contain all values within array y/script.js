/*
We want to extend the array class so that it provides a contains_all? method. This method will always assume that an array is passed in and will return true if all values in the passed in array are present within the current array.

For example:

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9];
items.containsAll([1, 2, 3]);  =>  true
items.containsAll([1, 5, 13]);  =>  false // because 13 is not in the items array
*/

Object.defineProperty(Array.prototype, "containsAll", {
  value: function containsAll(a) {
    for (let i = 0; i < a.length; i++) {
      if (!this.includes(a[i])) {
        return false;
      }
    }
    return true;
  },
});

console.log(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].containsAll([1, 2, 3, 4, 5])
); //true

//also this should not be a 6 kyu lol, maybe a 7 would be a better grade.
//Perhaps it could be a 6 if you need to write the prototype and it wasn't pre supplied.
