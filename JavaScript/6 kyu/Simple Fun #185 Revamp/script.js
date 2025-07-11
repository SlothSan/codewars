/*
 Task
Consider a string of lowercase Latin letters and space characters (" ").

First, rearrange the letters in each word alphabetically.

And then rearrange the words in ascending order of the sum of their characters' ASCII values.

If two or more words have the same ASCII value, rearrange them by their length in ascending order; If their length still equals to each other, rearrange them alphabetically.

Finally, return the result.

Example
For s = "batman is bruce wayne", the result should be "is bceru aenwy aamntb".

  After rearranging the letters the string turns into "aamntb is bceru aenwy". The ASCII values of each word are: [627, 220, 529, 548]. After sorting the words the following string is obtained: "is bceru aenwy aamntb" (with ASCII values of [220, 529, 548, 627]).

For s = "peter parker is spiderman", the result should be "is eeprt aekprr adeimnprs"

(ASCII values: [220, 554, 645, 963])

Input/Output
[input] string s
A string of lowercase words. Each word is separated by exactly one space character.

[output] a string   
*/

const revamp = (s) => {
  const words = s.split(" ");

  const transformed = words.map((original) => {
    const sorted = [...original].sort().join("");
    const asciiSum = [...sorted].reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
    return { word: sorted, asciiSum, len: sorted.length };
  });

  transformed.sort((a, b) => {
    if (a.asciiSum !== b.asciiSum) return a.asciiSum - b.asciiSum;
    if (a.len !== b.len) return a.len - b.len;
    return a.word.localeCompare(b.word);
  });

  return transformed.map((obj) => obj.word).join(" ");
};

console.log(revamp("andrew robertson is a bad be developer"));
//a be is abd adenrw deeeloprv benoorrst
