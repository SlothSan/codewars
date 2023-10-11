/*
Create a function to return true type of variable, i.e.

type([]) == 'array'
type({}) == 'object'
type('') == 'string'
type(NaN) == 'number'
*/

const type = (value) => {
  if (typeof value === "object") {
    if (Array.isArray(value)) return "array";
    if (value instanceof Date) return "date";
    if (value === null) return "null";
    return typeof value;
  }
  return typeof value;
};

console.log(type(NaN)); //number - lol JS
