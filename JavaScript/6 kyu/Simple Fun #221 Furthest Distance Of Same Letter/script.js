/*
Task
Given a string s of lowercase letters ('a' - 'z'), get the maximum distance between two same letters, and return this distance along with the letter that formed it.

If there is more than one letter with the same maximum distance, return the one that appears in s first.

Input/Output
[input] string s
A string of lowercase Latin letters, where at least one letter appears twice.

[output] a string
The letter that formed the maximum distance and the distance itself.

Example
For s = "fffffahhhhhhaaahhhhbhhahhhhabxx", the output should be "a23".

The maximum distance is formed by the character 'a' from index 5 to index 27 (0-based). Therefore, the answer is "a23".


*/

const distSameLetter = s => {
  const f = {}, l = {};
  [...s].forEach((c,i) => (f[c] ??= i, l[c] = i));
  const best = Object.keys(f).reduce((b,c) => {
    const d = l[c] - f[c];
    return d > b.d || (d === b.d && f[c] < f[b.c]) ? {c,d} : b;
  }, {c:"", d:-1});
  return best.c + (+best.d + 1) ;
};

console.log(distSameLetter("fffffahhhhhhaaahhhhbhhahhhhabxx")) //a23