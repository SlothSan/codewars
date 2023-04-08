/* 
You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

An example should clarify:

'taxi' would become 'atix' 'taxis' would become 'atxsi'
*/
const insideOut = (x) => {
  return x.split` `.map((word) => {
    if (word.length < 4) return word;
    let left = word.slice(0, word.length / 2).split``.reverse().join``;
    let right = word.slice(word.length / 2).split``.reverse().join``;
    let center = "";
    if (word.length % 2 !== 0) {
      right = word.slice(word.length / 2 + 1).split``.reverse().join``;
      center = word.slice(word.length / 2, word.length / 2 + 1);
    }
    return left + center + right;
  }).join` `;
};

console.log(insideOut("man i need a taxi up to ubud")); //man i ende a atix up to budu
