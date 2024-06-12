/* 
Write a function that takes a list of at least four elements as an argument and returns a list of the middle two or three elements in reverse order.
*/

const reverseMiddle = (array) => {
  const midIndex = Math.floor(array.length / 2);
  const length = array.length % 2 === 0 ? 2 : 3;
  return array.slice(midIndex - 1, midIndex + length - 1).reverse();
};

console.log(reverseMiddle([1, 2, 3, 4]));
//[ 3, 2 ]
