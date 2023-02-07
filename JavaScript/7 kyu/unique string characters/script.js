/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.

For example:

solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.

More examples in the tests cases.

Good luck!

Please also try Simple remove duplicates */

const solve = (a, b) => {
  let returnString = "";
  for (let i = 0; i < a.length; i++) {
    if (!b.includes(a[i])) {
      returnString += a[i];
    }
  }
  for (let i = 0; i < b.length; i++) {
    if (!a.includes(b[i])) {
      returnString += b[i];
    }
  }
  return returnString;
};

console.log(solve("xyab", "xzca")); //expected: ybzc
