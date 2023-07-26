/*
Your company MRE Tech has hired a spiritual consultant who advised on a new Balance policy: Don't take sides, don't favour, stay in the middle. This policy even applies to the software where all strings should now be centered. You are the poor soul to implement it.

Task
Implement a function center that takes a string strng, an integer width, and an optional character fill (default: ' ') and returns a new string of length width where strng is centered and on the right and left padded with fill.

center(strng, width, fill=' ')
If the left and right padding cannot be of equal length make the padding on the left side one character longer.

If strng is longer than width return strng unchanged.

Examples
center('a', 3)  # returns " a "
center('abc', 10, '_')  # returns "____abc___"
center('abcdefg', 2)  # returns "abcdefg"
*/

const center = (strng, width, fill = " ") => {
  if (strng.length >= width) {
    return strng;
  }
  const remainingSpace = width - strng.length;
  const leftPadding = fill.repeat(Math.ceil(remainingSpace / 2));
  const rightPadding = fill.repeat(Math.floor(remainingSpace / 2));
  return leftPadding + strng + rightPadding;
};

console.log(center("a", 10, "!")); //!!!!!a!!!!
