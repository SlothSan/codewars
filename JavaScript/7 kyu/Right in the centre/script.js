/*
Right in the Center
This is inspired by one of Nick Parlante's exercises on the CodingBat online code practice tool.

Given a sequence of characters, does "abc" appear in the CENTER of the sequence?

The sequence of characters could contain more than one "abc".

To define CENTER, the number of characters in the sequence to the left and right of the "abc" (which is in the middle) must differ by at most one.

If it is in the CENTER, return True. Otherwise, return False.

Write a function as the solution for this problem. This kata looks simple, but it might not be easy.

Example
is_in_middle("AAabcBB")  ->  True
is_in_middle("AabcBB")   ->  True
is_in_middle("AabcBBB")  ->  False
*/

const isInMiddle = (seq) => {
  let length = seq.length;
  let index = seq.indexOf("abc");

  if (index == -1 || length < 3) {
    return false;
  }

  let leftLength = index;
  let rightLength = length - index - 3;

  while (index != -1) {
    if (Math.abs(leftLength - rightLength) <= 1) {
      return true;
    }
    index = seq.indexOf("abc", index + 1);
    if (index != -1) {
      leftLength = index;
      rightLength = length - index - 3;
    }
  }

  return false;
};

console.log(isInMiddle("AabcBB")); //true
