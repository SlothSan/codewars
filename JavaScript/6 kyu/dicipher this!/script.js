/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go' */

const charCodeToChar = (characterCode) => {
  return String.fromCharCode(characterCode);
};

const swap = ([a, b, ...xs]) => [a, xs.pop(), ...xs, b].join("");

const decipherThis = (str) => {
  console.log(str);
  let stringArray = str.split(" ");
  for (let i = 0; i < stringArray.length; i++) {
    let number = stringArray[i].match(/\d/g).join("");
    let restOfWord = stringArray[i].slice(number.length);
    stringArray[i] = swap(charCodeToChar(number) + restOfWord);
  }
  return stringArray.join(" ");
};

console.log(
  decipherThis("72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o")
);
