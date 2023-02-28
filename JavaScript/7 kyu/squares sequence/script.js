/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

Examples
2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/

const squares = (x, n) => {
  let arr = [x];
  let current = x;
  if (n <= 0) return [];
  for (let i = 1; i < n; i++) {
    arr.push(Math.pow(current, 2));
    current = arr[i];
  }
  return arr;
};

console.log(squares(2, 5)); // [2, 4, 16, 256, 65536]
