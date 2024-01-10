/*
 Task
Coding in function countAnimals. function accept two parameters: animals, a string contains some animals; count, an array list of which animals we should count. The result should be a number array.

Examples
countAnimals("dog,cat",["dog","cat"]); //=> [1,1]
countAnimals("dog,cat",["dog","cat","pig"]); //=> [1,1,0]
countAnimals("dog,dog,cat",["dog","cat"]); //=> [2,1]
countAnimals("dog,dog,cat",["pig","cow"]); //=> [0,0]
*/

const countAnimals = (animals, count) => {
  return count.map((animal) => {
    const regex = new RegExp(`\\b${animal}\\b`, "g");
    const countMatches = (animals.match(regex) || []).length;
    return countMatches;
  });
};

console.log(countAnimals("dog,cat", ["dog", "cat"])); //[1, 1]
