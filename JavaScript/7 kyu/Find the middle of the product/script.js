/*
Given a string of characters, I want the function findMiddle()/find_middle() to return the middle number in the product of each digit in the string.

Example: 's7d8jd9' -> 7, 8, 9 -> 7*8*9=504, thus 0 should be returned as an integer.

Not all strings will contain digits. In this case and the case for any non-strings, return -1.

If the product has an even number of digits, return the middle two digits

Example: 1563 -> 56

NOTE: Remove leading zeros if product is even and the first digit of the two is a zero. Example 2016 -> 1
*/

const findMiddle = (str) => {
  if (typeof str !== "string") return -1;
  let sum = str.match(/\d/g);
  if (sum === null || sum.length < 1) return -1;
  const total = String(sum.reduce((acc, curr) => acc * Number(curr), 1));
  const length = total.length;
  const middleIndex = Math.floor(length / 2);
  if (length % 2 === 0) {
    const middleDigits = total.slice(middleIndex - 1, middleIndex + 1);
    return middleDigits.startsWith("0")
      ? parseInt(middleDigits[1])
      : parseInt(middleDigits);
  } else {
    return parseInt(total[middleIndex]);
  }
};

console.log(findMiddle("58jd9fgh/fgh6s.,sdf")); //16
