/*
I want to know the size of the longest consecutive elements of X in Y. You will receive two arguments: items and key. Return the length of the longest segment of consecutive keys in the given items.

Notes:

The items and the key will be either an integer or a string (consisting of letters only)
If the key does not appear in the items, return 0
Examples
90000, 0           -->  4
"abcdaaadse", "a"  -->  3
"abcdaaadse", "z"  -->  0
*/

const getConsectiveItems = (items, key) => {
  let itemsArr = String(items)
    .split("")
    .map((curr) => {
      if (typeof key === "number") {
        return +curr;
      } else {
        return curr;
      }
    });
  if (!itemsArr.includes(key)) {
    return 0;
  }

  let maxCount = 0;
  let currentCount = 0;

  for (let i = 0; i < itemsArr.length; i++) {
    if (itemsArr[i] === key) {
      currentCount++;
      maxCount = Math.max(maxCount, currentCount);
    } else {
      currentCount = 0;
    }
  }

  return maxCount;
};

console.log(getConsectiveItems(90000, 0)); //4
