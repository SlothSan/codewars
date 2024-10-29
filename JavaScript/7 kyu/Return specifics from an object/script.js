/*
Create a function that returns the values of an object which are numbers, and the keys of objects which have methods as values.

array should return numbers first then all the method names in the order they are in the object
strings, booleans, arrays should be ignored.
if the object is empty, then the array should return the following string: The Object is Empty
Example:

returnSpecifics({a:1,b:'str',c:2,d:true,e:function(a){return a;},f:3})
This would return [1,2,3,'e'] 
*/

const returnSpecifics = (obj) => {
  let res = [[], []];
  for (let [key, value] of Object.entries(obj)) {
    if (typeof value === "number") {
      res[0].push(value);
    }

    if (typeof value === "function") {
      res[1].push(String(key));
    }
  }
  return res[0].length || res[1].length
    ? res[0].concat(res[1])
    : ["The Object is Empty"];
};
