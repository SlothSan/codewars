/*
Sentence Calculator
Calculate the total score (sum of the individual character scores) of a sentence given the following score rules for each allowed group of characters:

Lower case [a-z]: 'a'=1, 'b'=2, 'c'=3, ..., 'z'=26
Upper case [A-Z]: 'A'=2, 'B'=4, 'C'=6, ..., 'Z'=52
Digits [0-9] their numeric value: '0'=0, '1'=1, '2'=2, ..., '9'=9
Other characters: 0 value
Note: input will always be a string
*/

const lettersToNumbers = (s) => {
  let sum = 0;

  let chars = s.split("");
  for (let char of chars) {
    let charCode = char.charCodeAt(0);

    if (charCode >= 97 && charCode <= 122) {
      sum += charCode -= 96;
    }

    if (charCode >= 65 && charCode <= 90) {
      sum += (charCode -= 64) * 2;
    }

    if (charCode >= 48 && charCode <= 57) {
      sum += charCode -= 48;
    }
  }
  return sum;
};

console.log(lettersToNumbers("Give me 5!")); //73
