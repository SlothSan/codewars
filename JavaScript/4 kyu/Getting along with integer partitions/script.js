/*
From wikipedia https://en.wikipedia.org/wiki/Partition_(number_theory)

In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition.

For example, 4 can be partitioned in five distinct ways:

4, 3 + 1, 2 + 2, 2 + 1 + 1, 1 + 1 + 1 + 1.

We can write:

enum(4) -> [[4],[3,1],[2,2],[2,1,1],[1,1,1,1]] and

enum(5) -> [[5],[4,1],[3,2],[3,1,1],[2,2,1],[2,1,1,1],[1,1,1,1,1]].

The number of parts in a partition grows very fast. For n = 50 number of parts is 204226, for 80 it is 15,796,476 It would be too long to tests answers with arrays of such size. So our task is the following:

1 - n being given (n integer, 1 <= n <= 50) calculate enum(n) ie the partition of n. We will obtain something like that:
enum(n) -> [[n],[n-1,1],[n-2,2],...,[1,1,...,1]] (order of array and sub-arrays doesn't matter). This part is not tested.

2 - For each sub-array of enum(n) calculate its product. If n = 5 we'll obtain after removing duplicates and sorting:

prod(5) -> [1,2,3,4,5,6]

prod(8) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 16, 18]

If n = 40 prod(n) has a length of 2699 hence the tests will not verify such arrays. Instead our task number 3 is:

3 - return the range, the average and the median of prod(n) in the following form (example for n = 5):

"Range: 5 Average: 3.50 Median: 3.50"

Range is an integer, Average and Median are float numbers rounded to two decimal places (".2f" in some languages).

Notes:
Range : difference between the highest and lowest values.

Mean or Average : To calculate mean, add together all of the numbers in a set and then divide the sum by the total count of numbers.

Median : The median is the number separating the higher half of a data sample from the lower half. (https://en.wikipedia.org/wiki/Median)

Hints:
Try to optimize your program to avoid timing out.

Memoization can be helpful but it is not mandatory for being successful.
*/

function partition(n) {
  let result = [];

  function _partition(n, max) {
    if (n === 0) return [[]];
    let result = [];
    for (let i = Math.min(n, max); i > 0; i--) {
      for (let p of _partition(n - i, i)) {
        result.push([i, ...p]);
      }
    }
    return result;
  }

  return _partition(n, n);
}

function productOfPartition(p) {
  return p.reduce((prod, num) => prod * num, 1);
}

function calculateStatistics(products) {
  products.sort((a, b) => a - b);
  let range = products[products.length - 1] - products[0];
  let average = products.reduce((sum, prod) => sum + prod, 0) / products.length;
  let median;
  if (products.length % 2 === 0) {
    median =
      (products[products.length / 2 - 1] + products[products.length / 2]) / 2;
  } else {
    median = products[Math.floor(products.length / 2)];
  }
  return `Range: ${range} Average: ${average.toFixed(
    2
  )} Median: ${median.toFixed(2)}`;
}

function part(n) {
  let partitions = partition(n);
  let products = [...new Set(partitions.map(productOfPartition))];
  return calculateStatistics(products);
}

console.log(part(10)); // "Range: 35 Average: 15.00 Median: 14.00"
