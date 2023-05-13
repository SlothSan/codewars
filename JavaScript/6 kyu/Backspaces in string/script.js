/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/

const cleanString = (string) => {
  const characters = [];
  for (const character of string) {
    if (character !== "#") {
      characters.push(character);
      continue;
    }
    if (characters.length) {
      characters.pop();
    }
  }
  return characters.join("");
};

console.log(cleanString("abc#d##c")); //ac
