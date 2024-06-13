/*
Write a function that returns the smallest distance between two factors of a number. The input will always be a number greater than one.

Example:

13013 has factors: [ 1, 7, 11, 13, 77, 91, 143, 169, 1001, 1183, 1859, 13013]

Hence the asnwer will be 2 (=13-11)
*/

const getFactors = (n) => {
  let numFactors = [];
  for (let i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
    if (n % i === 0) {
      numFactors.push(i);

      if (n / i !== i) {
        numFactors.push(n / i);
      }
    }
  }
  numFactors.sort((a, b) => a - b);
  return numFactors;
};

const minDistance = (n) => {
  let numFactors = getFactors(n);
  let minDistance = Infinity;
  for (let i = 0; i < numFactors.length; i++) {
    let curr = numFactors[i];
    let next = numFactors[i + 1];
    let diff = next - curr;
    if (diff < minDistance) minDistance = diff;
  }
  return minDistance;
};

console.log(minDistance(218683));
//198
