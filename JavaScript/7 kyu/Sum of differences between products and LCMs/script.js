/*
In this kata you need to create a function that takes a 2D array/list of non-negative integer pairs and returns the sum of all the "saving" that you can have getting the LCM of each couple of number compared to their simple product.

For example, if you are given:

[[15,18], [4,5], [12,60]]

Their product would be:

[270, 20, 720]

While their respective LCM would be:

[90, 20, 60]

Thus the result should be:

(270-90)+(20-20)+(720-60)==840

This is a kata that I made, among other things, to let some of my trainees familiarize with the euclidean algorithm, a really neat tool to have on your belt ;)
*/

function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}

function lcm(a, b) {
  if (a === 0 || b === 0) return 0;
  return (a * b) / gcd(a, b);
}

function sumDifferencesBetweenProductsAndLCMs(pairs) {
  let result = 0;

  for (let i = 0; i < pairs.length; i++) {
    const product = pairs[i][0] * pairs[i][1];
    const lcmValue = lcm(pairs[i][0], pairs[i][1]);
    result += product - lcmValue;
  }

  return result;
}

console.log(
  sumDifferencesBetweenProductsAndLCMs([
    [20, 50],
    [10, 10],
    [50, 20],
  ])
);
//1890