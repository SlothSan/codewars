/*
The integer 64 is the first integer that has all of its digits even and furthermore, is a perfect square.

The second one is 400 and the third one 484.

Give the numbers of this sequence that are in the range [a,b] (both values inclusive)

Examples:

Even digit squares between 100 to 1000:  [400, 484]  (the output should be sorted)
Even digit squares between 1000 to 4000: []
Features of the random tests:

number of tests = 167
maximum value for a = 1e10
maximum value for b = 1e12
You do not have to check the entries; a and b are always positive integers and a < b.

Happy coding!!
*/

const checkAllDigitsEven = (numericValue) => {
  while (numericValue > 0) {
    const extractedDigit = numericValue % 10;
    if (extractedDigit & 1) return false;
    numericValue = Math.floor(numericValue / 10);
  }
  return true;
};

const precomputedEvenDigitPerfectSquares = (() => {
  const resultingValues = [];
  const maximumSquareRootInclusive = Math.floor(Math.sqrt(1e12));
  for (
    let candidateBase = 0;
    candidateBase <= maximumSquareRootInclusive;
    candidateBase++
  ) {
    const squaredCandidate = candidateBase * candidateBase;
    if (
      squaredCandidate !== 0 &&
      checkAllDigitsEven(squaredCandidate) &&
      squaredCandidate >= 64
    ) {
      resultingValues.push(squaredCandidate);
    }
  }
  return resultingValues;
})();

const findFirstIndexAtLeast = (targetArray, targetValue) => {
  let lowerIndex = 0;
  let upperIndex = targetArray.length;
  while (lowerIndex < upperIndex) {
    const middleIndex = (lowerIndex + upperIndex) >> 1;
    if (targetArray[middleIndex] < targetValue) lowerIndex = middleIndex + 1;
    else upperIndex = middleIndex;
  }
  return lowerIndex;
};

const findLastIndexAtMost = (targetArray, targetValue) => {
  let lowerIndex = 0;
  let upperIndex = targetArray.length;
  while (lowerIndex < upperIndex) {
    const middleIndex = (lowerIndex + upperIndex) >> 1;
    if (targetArray[middleIndex] <= targetValue) lowerIndex = middleIndex + 1;
    else upperIndex = middleIndex;
  }
  return lowerIndex - 1;
};

const evenDigitSquares = (lowerBoundInclusive, upperBoundInclusive) => {
  const startingIndex = findFirstIndexAtLeast(
    precomputedEvenDigitPerfectSquares,
    lowerBoundInclusive
  );
  const endingIndex = findLastIndexAtMost(
    precomputedEvenDigitPerfectSquares,
    upperBoundInclusive
  );
  if (startingIndex > endingIndex) return [];
  return precomputedEvenDigitPerfectSquares.slice(
    startingIndex,
    endingIndex + 1
  );
};

console.log(evenDigitSquares(1, 100000));

/*
[
     64,   400,   484,
   4624,  6084,  6400,
   8464, 26244, 28224,
  40000, 40804, 48400,
  68644, 88804
]
*/
