/*
In this kata you need to build a function to return either true/True or false/False if a string can be seen as the repetition of a simpler/shorter subpattern or not.

For example:

hasSubpattern("a") === false; //no repeated pattern
hasSubpattern("aaaa") === true; //created repeating "a"
hasSubpattern("abcd") === false; //no repeated pattern
hasSubpattern("abababab") === true; //created repeating "ab"
hasSubpattern("ababababa") === false; //cannot be entirely reproduced repeating a pattern
Strings will never be empty and can be composed of any character (just consider upper- and lowercase letters as different entities) and can be pretty long (keep an eye on performances!).

If you liked it, go for the next kata of the series!
*/

const hasSubpattern = (s) => {
  const len = s.length;
  for (let patternLen = 1; patternLen <= Math.floor(len / 2); patternLen++) {
    if (len % patternLen === 0) {
      const pattern = s.slice(0, patternLen);
      let reconstructed = "";
      for (let i = 0; i < len / patternLen; i++) {
        reconstructed += pattern;
      }
      if (reconstructed === s) {
        return true;
      }
    }
  }
  return false;
};

console.log(hasSubpattern("123a123a123a")); //true
