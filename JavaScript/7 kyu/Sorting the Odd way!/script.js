const sortItOut = (array) => {
  let odds = [];
  let evens = [];
  for (let i = 0; i < array.length; i++) {
    let curr = Math.floor(array[i]);
    if (curr % 2 !== 0) {
      odds.push(array[i]);
    } else {
      evens.push(array[i]);
    }
  }

  return odds.sort((a, b) => a - b).concat(evens.sort((a, b) => b - a));
};

console.log(sortItOut([1, 31, 41, 55, 123, 51, 60, 44]));
/* 
[
   1,  31, 41, 51,
  55, 123, 60, 44
]
*/
