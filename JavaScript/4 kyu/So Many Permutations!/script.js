/*
In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!
*/

const permutations = (string) => {
  if (string.length === 1) {
    return [string];
  }
  const result = [];
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (string.indexOf(char) !== i) {
      continue;
    }
    const remainingChars = string.slice(0, i) + string.slice(i + 1);
    const innerPermutations = permutations(remainingChars);
    for (let j = 0; j < innerPermutations.length; j++) {
      result.push(char + innerPermutations[j]);
    }
  }
  return result;
};

console.log(permutations("hello"));

/*
[
  'hello', 'helol', 'heoll', 'hlelo', 'hleol',
  'hlleo', 'hlloe', 'hloel', 'hlole', 'hoell',
  'holel', 'holle', 'ehllo', 'ehlol', 'eholl',
  'elhlo', 'elhol', 'ellho', 'elloh', 'elohl',
  'elolh', 'eohll', 'eolhl', 'eollh', 'lhelo',
  'lheol', 'lhleo', 'lhloe', 'lhoel', 'lhole',
  'lehlo', 'lehol', 'lelho', 'leloh', 'leohl',
  'leolh', 'llheo', 'llhoe', 'lleho', 'lleoh',
  'llohe', 'lloeh', 'lohel', 'lohle', 'loehl',
  'loelh', 'lolhe', 'loleh', 'ohell', 'ohlel',
  'ohlle', 'oehll', 'oelhl', 'oellh', 'olhel',
  'olhle', 'olehl', 'olelh', 'ollhe', 'olleh'
]
*/
