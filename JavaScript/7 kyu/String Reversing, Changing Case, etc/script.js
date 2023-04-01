/*
Given 2 string parameters, show a concatenation of:

the reverse of the 2nd string with inverted case; e.g Fish -> HSIf
a separator in between both strings: @@@
the 1st string reversed with inverted case and then mirrored; e.g Water -> RETAwwATER 
** Keep in mind that this kata was initially designed for Shell, I'm aware it may be easier in other languages.**
*/

const changeCase = (string) => {
  return string.split("").map((letter) => {
    if (letter === letter.toUpperCase()) {
      return letter.toLowerCase();
    } else {
      return letter.toUpperCase();
    }
  });
};

const reverseAndMirror = (s1, s2) => {
  s1 = changeCase(s1).join("");
  let s1Rev = [...s1].reverse().join("");
  s2 = changeCase(s2).reverse().join("");
  return `${s2}@@@${s1Rev}${s1}`;
};

console.log(reverseAndMirror("FizZ", "buZZ")); //zzUB@@@zZIffIZz
