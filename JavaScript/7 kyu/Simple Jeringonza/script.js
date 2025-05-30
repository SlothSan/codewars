/*
Hepellopo!

Jeringonza is a Spanish language game, similar to Pig Latin, played by children in Spain and all over Hispanic America. It consists of adding the letter p after each vowel (a, e, i, o or u) of a word, and repeating the vowel. For example, jeringonza becomes jeperipingoponzapa (or j-epe-r-ipi-ng-opo-nz-apa).

For the purposes of this kata, the input and output are both strings and no input strings will be empty. Also, the added 'p' should match the case of the vowel. So opo for o and EPE for E.

(If you're interested - there's a few extra components in jeringonza, such as how to deal with stressed vowels, but for the purposes of this kata we're keeping it simple)

Gopoopod lupuck!
*/

const jeringonza = (input) => {
  const vowels = "aeiouAEIOU";
  let result = "";

  for (let char of input) {
    if (vowels.includes(char)) {
      const pChar = char === char.toUpperCase() ? "P" : "p";
      result += char + pChar + char;
    } else {
      result += char;
    }
  }

  return result;
};

console.log(jeringonza("Please give this kata some love if you enjoyed it"));
//Plepeapasepe gipivepe thipis kapatapa sopomepe lopovepe ipif yopoupu epenjopoyeped ipit
