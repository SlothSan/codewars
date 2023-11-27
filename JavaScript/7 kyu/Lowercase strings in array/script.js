/*
Create a function to lowercase all strings in an array. Non-string items should remain unchanged.
Example

arrayLowerCase(['Red', 'Green']) == ['red', 'green']
arrayLowerCase([1, 'Green']) == [1, 'green']
*/

const arrayLowerCase = (arr) => {
  return arr.map((curr) => {
    if (typeof curr === "string") {
      return curr.toLowerCase();
    } else {
      return curr;
    }
  });
};

console.log(arrayLowerCase(["Hello", "World"]));
//[ 'hello', 'world' ]
