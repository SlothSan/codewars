/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing. For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace'].
*/

const spacey = (array) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    let current = array.slice(0, i + 1).join("");
    results.push(current);
  }
  return results;
};

console.log(spacey(["kevin", "has", "no", "space"])); //[ 'kevin', 'kevinhas', 'kevinhasno', 'kevinhasnospace' ]
