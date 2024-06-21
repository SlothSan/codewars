/*
You have to code a function getAllPrimeFactors, which takes an integer as parameter and returns an array containing its prime decomposition by ascending factors. If a factor appears multiple times in the decomposition, it should appear as many times in the array.

exemple: getAllPrimeFactors(100) returns [2,2,5,5] in this order.

This decomposition may not be the most practical.

You should also write getUniquePrimeFactorsWithCount, a function which will return an array containing two arrays: one with prime numbers appearing in the decomposition and the other containing their respective power.

exemple: getUniquePrimeFactorsWithCount(100) returns [[2,5],[2,2]]

You should also write getUniquePrimeFactorsWithProducts, which returns an array containing the prime factors to their respective powers.

exemple: getUniquePrimeFactorsWithProducts(100) returns [4,25]

Errors, if:

n is not a number
n not an integer
n is negative or 0
The three functions should respectively return [], [[],[]] and [].

Edge cases:

if n=0, the function should respectively return [], [[],[]] and [].
if n=1, the function should respectively return [1], [[1],[1]], [1].
if n=2, the function should respectively return [2], [[2],[1]], [2].
The result for n=2 is normal. The result for n=1 is arbitrary and has been chosen to return a usefull result. The result for n=0 is also arbitrary but can not be chosen to be both usefull and intuitive. ([[0],[0]] would be meaningfull but wont work for general use of decomposition, [[0],[1]] would work but is not intuitive.)
*/

function getAllPrimeFactors(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }

  const primeFactors = [];
  let divisor = 2;

  while (n >= 2) {
    while (n % divisor === 0) {
      primeFactors.push(divisor);
      n = n / divisor;
    }
    divisor++;
  }

  return primeFactors;
}

function getUniquePrimeFactorsWithCount(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
    return [[], []];
  }
  if (n === 1) {
    return [[1], [1]];
  }

  const primeFactors = getAllPrimeFactors(n);
  const uniquePrimes = [];
  const counts = [];

  primeFactors.forEach((factor) => {
    const index = uniquePrimes.indexOf(factor);
    if (index === -1) {
      uniquePrimes.push(factor);
      counts.push(1);
    } else {
      counts[index]++;
    }
  });

  return [uniquePrimes, counts];
}

function getUniquePrimeFactorsWithProducts(n) {
  if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }

  const [uniquePrimes, counts] = getUniquePrimeFactorsWithCount(n);
  const products = uniquePrimes.map((prime, index) =>
    Math.pow(prime, counts[index])
  );

  return products;
}
