function isReversibleNumber(num) {
  const reversed = parseInt(num.toString().split("").reverse().join(""), 10);
  if (num.toString().length !== reversed.toString().length) {
    // Skip numbers that produce a leading zero when reversed
    return false;
  }
  const absoluteDifference = Math.abs(num - reversed);
  const sum = num + reversed;
  return absoluteDifference !== 0 && sum % absoluteDifference === 0;
}

function sumDifRev(n) {
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
