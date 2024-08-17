/*
Split an array of objects into 2 arrays based on truthiness of a provided property. The return value should be an array whose first element is an array of the truthy values, and whose second element is an array of the falsey values.

Javascript example:

var obj1 = { prop: true },
    obj2 = { prop: false };
    
split([obj1, obj2], 'prop');
// [[obj1], [obj2]]
CoffeeScript example:

obj1 = { prop: true }
obj2 = { prop: false }

split [obj1, obj2], 'prop'
# [[obj1], [obj2]]
*/

const split = (arr, prop) =>
  arr.reduce(
    (result, obj) => {
      if (obj[prop]) {
        result[0].push(obj);
      } else {
        result[1].push(obj);
      }
      return result;
    },
    [[], []]
  );

var obj1 = { prop: true },
  obj2 = { prop: false };

var values = split([obj1, obj2], "prop");

console.log(values);
