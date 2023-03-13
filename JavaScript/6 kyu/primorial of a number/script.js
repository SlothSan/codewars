/*

*/
const numPrimorial = (n) => {
  let primes = [
    2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
    73, 79, 83, 89, 97,
  ];

  return primes.slice(0, n).reduce((acc, curr) => {
    return acc * curr;
  }, 1);
};

console.log(numPrimorial(3)); //30
