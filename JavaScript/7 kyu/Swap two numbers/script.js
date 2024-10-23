/*
Task
Write a swap function to swap 2 integers in place

NOTES

The input parameter is an integer array with 2 elements. ary.length == 2
You are not allowed to rename the input parameter
You are not allowed to use any other variables
You are not allowed to use any other functions
You are not allowed to use any other keywords
In other words, I want you to write the equivalent of

swap = ary => {
  tmp = ary[0]
  ary[0] = ary[1]
  ary[1] = tmp
}
But without the tmp !
*/

const swap = (ary) => {
  ary[0] = ary[0] + ary[1];
  ary[1] = ary[0] - ary[1];
  ary[0] = ary[0] - ary[1];
};

const arr = [10, 20];
swap(arr);
console.log(arr); //[ 20, 10 ]
//NB this is a bad kata as its mutating inputs which is bad.
//Also the const syntax above fails the test, so if you copy and paste and wonder why it no work, that's why, i just prefer it :)
