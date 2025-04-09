/*
See the following triangle:

____________________________________
 1                                      
 2   4   2                              
 3   6   9   6   3                      
 4   8   12  16  12  8   4             
 5   10  15  20  25  20  15  10  5   
 ___________________________________
 
The total sum of the numbers in the triangle, up to the 5th line included, is 225, part of it, 144, corresponds to the total sum of the even terms and 81 to the total sum of the odd terms.

Create a function that may output an array (in Haskell, a tuple) with three results for each value of n.

n  ---->  [total_sum, total_even_sum, total_odd_sum]
Our example will be:

5  ---->  [225, 144, 81]
Features of the random tests:

number of tests = 100
50 <= n <= 5000
Enjoy it!
*/

const multTriangle = (n) => {
  let totalSum = 0;
  let evenSum = 0;
  let oddSum = 0;
  for (let i = 1; i <= n; i++) {
    let rowTotal = Math.pow(i, 3);
    totalSum += rowTotal;
    if (i % 2 === 0) {
      evenSum += rowTotal;
    } else {
      let evenRow = i * (((i - 1) * (i + 1)) / 2);
      evenSum += evenRow;
      oddSum += rowTotal - evenRow;
    }
  }
  return [totalSum, evenSum, oddSum];
};

console.log(multTriangle(50)); //[ 1625625, 1235000, 390625 ]
