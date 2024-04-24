/*
Check that the two provided arrays both contain the same number of different unique items, regardless of order. For example in the following:

[a,a,a,a,b,b] and [c,c,c,d,c,d]
Both arrays have four of one item and two of another, so balance should return true.

#Have fun!
*/

const balance = (arr1, arr2) => {
  const countUniqueItems = (arr) => {
    const counts = {};
    for (const item of arr) {
      counts[item] = (counts[item] || 0) + 1;
    }
    return Object.values(counts).sort().join("");
  };

  const count1 = countUniqueItems(arr1);
  const count2 = countUniqueItems(arr2);

  return count1 === count2;
};

let array1 = ["a", "a", "a", "a", "a", "b", "b", "b"],
  array2 = ["c", "c", "c", "c", "c", "d", "d", "d"];

console.log(balance(array1, array2)); //true
