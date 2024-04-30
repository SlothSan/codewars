/* 
Goal
Given a list of elements [a1, a2, ..., an], with each ai being a string, write a function majority that returns the value that appears the most in the list.

If there's no winner, the function should return None, NULL, nil, etc, based on the programming language.

Example
majority(["A", "B", "A"]) returns "A"
majority(["A", "B", "B", "A"]) returns null
*/

const majority = (arr) => {
  if (arr.length === 0) return null;

  const frequency = {};

  arr.forEach((element) => {
    frequency[element] = (frequency[element] || 0) + 1;
  });

  let maxCount = 0;
  let majorityElement = null;

  for (const element in frequency) {
    if (frequency[element] > maxCount) {
      maxCount = frequency[element];
      majorityElement = element;
    } else if (frequency[element] === maxCount) {
      majorityElement = null;
    }
  }

  return majorityElement;
};

console.log(majority(["A", "B", "A"])); //A
