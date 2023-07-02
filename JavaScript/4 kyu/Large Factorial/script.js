/*
In mathematics, the factorial of integer n is written as n!. It is equal to the product of n and every integer preceding it. For example: 5! = 1 x 2 x 3 x 4 x 5 = 120

Your mission is simple: write a function that takes an integer n and returns the value of n!.

You are guaranteed an integer argument. For any values outside the non-negative range, return null, nil or None (return an empty string "" in C and C++). For non-negative numbers a full length number is expected for example, return 25! =  "15511210043330985984000000"  as a string.

For more on factorials, see http://en.wikipedia.org/wiki/Factorial

NOTES:

The use of BigInteger or BigNumber functions has been disabled, this requires a complex solution

I have removed the use of require in the javascript language.
*/

const factorial = (n) => {
  if (typeof n !== "number" || !Number.isInteger(n) || n < 0) {
    return null;
  }

  let result = "1";

  for (let i = 2; i <= n; i++) {
    result = multiply(result, i.toString());
  }

  return result;
};

const multiply = (a, b) => {
  let result = Array(a.length + b.length).fill(0);

  for (let i = a.length - 1; i >= 0; i--) {
    let digitA = Number(a[i]);

    for (let j = b.length - 1; j >= 0; j--) {
      let digitB = Number(b[j]);
      let product = digitA * digitB + result[i + j + 1];
      result[i + j + 1] = product % 10;
      result[i + j] += Math.floor(product / 10);
    }
  }

  while (result[0] === 0) {
    result.shift();
  }

  return result.join("");
};

console.log(factorial(15)); //1307674368000
