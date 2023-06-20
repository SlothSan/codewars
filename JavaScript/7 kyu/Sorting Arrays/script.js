/*
Given two arrays, a1 and a2, sort the elements of a2 based on the the index of the word in a1 that begins with the same letter.

Example 1
a1 = ['giraffe', 'orangutan', 'impala', 'elephant', 'rhino']
a2 = ['rattlesnake', 'eagle', 'geko', 'iguana', 'octopus']

returns ['geko', 'octopus', 'iguana', 'eagle', 'rattlesnake']
Example 2
a1 = ['jellyfish', 'koi', 'caribou', 'owl', 'dolphin']
a2 = ['ostrich', 'jaguar', 'deer', 'camel', 'kangaroo']

returns ['jaguar', 'kangaroo', 'camel', 'ostrich', 'deer']
Each element in the arrays will start with a unique letter so there will only be a single match for each element.
*/

const sortArray = (a1, a2) => {
  const indexMap = new Map();
  a1.forEach((word, index) => {
    indexMap.set(word[0], index);
  });
  a2.sort((word1, word2) => {
    const index1 = indexMap.get(word1[0]);
    const index2 = indexMap.get(word2[0]);
    return index1 - index2;
  });
  return a2;
};

const a1 = ["giraffe", "orangutan", "impala", "elephant", "rhino"];
const a2 = ["rattlesnake", "eagle", "geko", "iguana", "octopus"];

console.log(sortArray(a1, a2));
