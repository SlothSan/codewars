/*
This Kata is intended as a small challenge for my students

All Star Code Challenge #19

You work for an ad agency and your boss, Bob, loves a catchy slogan. He's always jumbling together "buzz" words until he gets one he likes. You're looking to impress Boss Bob with a function that can do his job for him.

Create a function called sloganMaker() that accepts an array of string "buzz" words. The function returns an array of all possible UNIQUE string permutations of the buzz words (concatonated and separated by spaces).

Your boss is not very bright, so anticipate him using the same "buzz" word more than once, by accident. The function should ignore these duplicate string inputs.

sloganMaker(["super", "hot", "guacamole"]);
//[ 'super hot guacamole',
//  'super guacamole hot',
//  'hot super guacamole',
//  'hot guacamole super',
//  'guacamole super hot',
//  'guacamole hot super' ]

sloganMaker(["cool", "pizza", "cool"]); // => [ 'cool pizza', 'pizza cool' ]
Note:
There should be NO duplicate strings in the output array

The input array MAY contain duplicate strings, which should STILL result in an output array with all unique strings

An empty string is valid input

The order of the permutations in the output array does not matter
*/

const sloganMaker = (buzzWords) => {
  let uniqueBuzzWords = [...new Set(buzzWords)];
  let uniquePermutations = new Set();

  const generatePermutations = (currentPermutation, remainingWords) => {
    if (remainingWords.length === 0) {
      uniquePermutations.add(currentPermutation.trim());
    } else {
      for (let i = 0; i < remainingWords.length; i++) {
        let nextWord = remainingWords[i];
        let newRemaining = remainingWords
          .slice(0, i)
          .concat(remainingWords.slice(i + 1));
        generatePermutations(currentPermutation + " " + nextWord, newRemaining);
      }
    }
  };

  generatePermutations("", uniqueBuzzWords);

  return Array.from(uniquePermutations);
};

console.log(sloganMaker(["Pizza", "Delicious", "Cheesy", "Super", "Gluten"]));
/*
[
  'Pizza Delicious Cheesy Super',
  'Pizza Delicious Super Cheesy',
  'Pizza Cheesy Delicious Super',
  'Pizza Cheesy Super Delicious',
  'Pizza Super Delicious Cheesy',
  'Pizza Super Cheesy Delicious',
  'Delicious Pizza Cheesy Super',
  'Delicious Pizza Super Cheesy',
  'Delicious Cheesy Pizza Super',
  'Delicious Cheesy Super Pizza',
  'Delicious Super Pizza Cheesy',
  'Delicious Super Cheesy Pizza',
  'Cheesy Pizza Delicious Super',
  'Cheesy Pizza Super Delicious',
  'Cheesy Delicious Pizza Super',
  'Cheesy Delicious Super Pizza',
  'Cheesy Super Pizza Delicious',
  'Cheesy Super Delicious Pizza',
  'Super Pizza Delicious Cheesy',
  'Super Pizza Cheesy Delicious',
  'Super Delicious Pizza Cheesy',
  'Super Delicious Cheesy Pizza',
  'Super Cheesy Pizza Delicious',
  'Super Cheesy Delicious Pizza'
]
*/
