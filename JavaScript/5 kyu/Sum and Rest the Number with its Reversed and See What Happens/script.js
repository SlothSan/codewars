/*
The number 45 is the first integer in having this interesting property: the sum of the number with its reversed is divisible by the difference between them(absolute Value).

45 + 54 = 99 
abs(45 - 54) = 9
99 is divisible by 9.
The first terms of this special sequence are :

n        a(n)
1        45
2        54
3        495
4        594
Make the function that receives n, the ordinal number of the term and may give us, the value of the term of the sequence. Let's see some cases (input ----> output):

1 -----> 45
3 -----> 495
"Important: Do not include numbers which, when reversed, have a leading zero, e.g.: 1890 reversed is 0981, so 1890 should not be included."

Your code will be tested up to the first 65 terms, so you should think to optimize it as much as you can.

(Hint: I memoize, you memoize, he memoizes, ......they (of course) memoize)

Happy coding!!
*/

const isReversibleNumber = (num) => {
  const reversed = parseInt(num.toString().split("").reverse().join(""), 10);
  if (num.toString().length !== reversed.toString().length) {
    // Skip numbers that produce a leading zero when reversed
    return false;
  }
  const absoluteDifference = Math.abs(num - reversed);
  const sum = num + reversed;
  return absoluteDifference !== 0 && sum % absoluteDifference === 0;
}

const sumDifRev = (n) => {
  let count = 0;
  let number = 45; // Starting from 45, as per the problem statement

  while (true) {
    if (isReversibleNumber(number)) {
      count++;
      if (count === n) {
        return number;
      }
    }
    number++;
  }
}

// Memoization wrapper
const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const key = args.join("-");
    if (cache[key]) {
      return cache[key];
    }
    const result = func(...args);
    cache[key] = result;
    return result;
  };
};
