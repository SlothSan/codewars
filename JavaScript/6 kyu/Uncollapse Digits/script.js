/*
Task
You will be given a string of English digits "stuck" together, like this:

"zeronineoneoneeighttwoseventhreesixfourtwofive"

Your task is to split the string into separate digits:

"zero nine one one eight two seven three six four two five"

Examples
"three"              -->  "three"
"eightsix"           -->  "eight six"
"fivefourseven"      -->  "five four seven"
"ninethreesixthree"  -->  "nine three six three"
"fivethreefivesixthreenineonesevenoneeight"  -->  "five three five six three nine one seven one eight"
*/

const uncollapse = (digits) => {
  const digitDictionary = {
    zero: "zero",
    one: "one",
    two: "two",
    three: "three",
    four: "four",
    five: "five",
    six: "six",
    seven: "seven",
    eight: "eight",
    nine: "nine",
  };

  let result = "";
  let currentWord = "";

  for (let i = 0; i < digits.length; i++) {
    currentWord += digits[i];
    if (currentWord in digitDictionary) {
      result += digitDictionary[currentWord] + " ";
      currentWord = ""; // Reset the currentWord.
    }
  }
  return result.trim();
};

console.log(uncollapse("onetwofoureighttwozeronineeight"));

// one two four eight two zero nine eight
