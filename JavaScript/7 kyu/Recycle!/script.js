/* 
You will need to sort the rubbish according to the material and return the number of items in each box in the form of an array i.e [2,3,4] where 2 is the number of plastic items, 3 is the number of glass items and 4 is the number of card items. assume:

Plastics > 0, Glass < 0, Card = 0
*/

const recycleMe = (recycle) => {
  let result = [0, 0, 0];
  recycle.forEach((item) => {
    if (item > 0) {
      result[0]++;
    } else if (item < 0) {
      result[1]++;
    } else {
      result[2]++;
    }
  });
  return result;
};

console.log(recycleMe([5, -9, 0, 6, -84, -95, 15]));
//[ 3, 3, 1 ]
