/*
Simplified number to money converter.
Note:
truncate to 2 decimal places
don't keep trailing zeros
input will be a positive number with at least two trailing digits
Examples:
2546.2562 --> '2,546.25'

1500.342626 --> '1,500.34'

100.2134 --> '100.21'

Taken from 'Formatting a number as price' (Kyu 5)
*/

const numberToMoney = (n) => {
  let [int, change] = String(n).split(".");
  return parseFloat(int + "." + change.slice(0, 2)).toLocaleString();
};

console.log(numberToMoney(24123.15132)); //24,123.15
