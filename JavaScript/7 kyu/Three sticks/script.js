/*
Imagine that you are given two sticks. You want to end up with three sticks of equal length. You are allowed to cut either or both of the sticks to accomplish this, and can throw away leftover pieces.

Write a function, maxlen, that takes the lengths of the two sticks (L1 and L2, both positive values), that will return the maximum length you can make the three sticks.
*/

const maxlen = (l1, l2) => Math.floor((l1 + l2) / 3);

console.log(maxlen(10, 15)); //8 