/*Write a function to generate 'n' number of fibonacci series (0,1,1,2,3...) in reverse order . The output should be a string of fibonacci series in the reverse order upto the given number.

Example
reverseFibo(3)  // => '110'
reverseFibo(10) // => '3421138532110'*/

const reverseFibo = (n) => {
  let fib = [0, 1];
  for (let i = 2; i < n; i++) fib[i] = fib[i - 1] + fib[i - 2];
  return fib.slice(0, n).reverse().join("");
};

console.log(reverseFibo(10));
//3421138532110
