/* 
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

const numberOfPairs = (gloves) => {
  const colorCounts = {};
  for (let color of gloves) {
    colorCounts[color] = (colorCounts[color] || 0) + 1;
  }
  let totalPairs = 0;
  for (let color in colorCounts) {
    const count = colorCounts[color];
    totalPairs += Math.floor(count / 2);
  }
  return totalPairs;
};

console.log(
  numberOfPairs(["gray", "black", "purple", "purple", "gray", "black"])
); //3
