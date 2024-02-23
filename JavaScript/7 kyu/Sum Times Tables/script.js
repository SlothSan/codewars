/*
Write a function sumTimesTables which sums the result of the sums of the elements specified in tables multiplied by all the numbers in between min and max including themselves.

For example, for sumTimesTables([2,5],1,3) the result should be the same as

2*1 + 2*2 + 2*3 +
5*1 + 5*2 + 5*3
i.e. the table of two from 1 to 3 plus the table of five from 1 to 3

All the numbers are integers but you must take in account:

tables could be empty.
min could be negative.
max could be really big.
*/

const sumTimesTables = (tables, min, max) => {
  return (
    (tables.reduce((acc, curr) => acc + curr, 0) *
      (min + max) *
      (max + 1 - min)) /
    2
  );
};

console.log(sumTimesTables([2, 3], 1, 3));
//30
