/*
I will give you an integer (N) and a string. Break the string up into as many substrings of N as you can without spaces. If there are leftover characters, include those as well.

Example: 

N = 5;

String = "This is an example string";

Return value:
Thisi
sanex
ample
strin
g

Return value as a string: 'Thisi'+'\n'+'sanex'+'\n'+'ample'+'\n'+'strin'+'\n'+'g' 
*/

const stringBreakers = (n, string) => {
  string = string.replace(/\s/g, "");
  let arr = [];
  for (let i = 0; i < string.length; i += n) {
    arr.push(string.slice(i, i + n));
  }
  return arr.join`\n`;
};

console.log(stringBreakers(5, "This is an example string"));
/*
Thisi
sanex
ample
strin
g
*/
