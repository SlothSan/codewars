/*

*/

const findMissingLetter = (array) => {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
};

console.log(findMissingLetter(["a", "b", "c", "d", "f"])); //e
