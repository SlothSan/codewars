/*
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

tripleX("abraxxxas") → true
tripleX("xoxotrololololololoxxx") → false
tripleX("softX kitty, warm kitty, xxxxx") → true
tripleX("softx kitty, warm kitty, xxxxx") → false
Note :

capital X's do not count as an occurrence of "x".
if there are no "x"'s then return false
*/

const tripleX = (str) => {
  str = str.split("");
  if (!str.includes("x")) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "x") {
      if (str[i + 1] === "x") {
        if (str[i + 2] === "x") {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};

console.log(tripleX("abraxxxas")); //true
