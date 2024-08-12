const midpointSum = (ints) => {
  if (ints.length < 3) return null;

  let totalSum = ints.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 1; i < ints.length - 1; i++) {
    leftSum += ints[i - 1];
    if (leftSum === totalSum - leftSum - ints[i]) return i;
  }

  return null;
};

console.log(midpointSum([4, 1, 7, 9, 3, 9]));
//3
