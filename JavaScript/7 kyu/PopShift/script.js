/* 
You will be given a string.

You need to return an array of three strings by gradually pulling apart the string.

You should repeat the following steps until the string length is 1:

a) remove the final character from the original string, add to solution string 1. b) remove the first character from the original string, add to solution string 2.

The final solution string value is made up of the remaining character from the original string, once originalstring.length == 1.

Example:

"exampletesthere" becomes: ["erehtse","example","t"]

The Kata title gives a hint of one technique to solve.
*/

const popShift = (s) => {
  let str1 = "";
  let str2 = "";

  while (s.length > 1) {
    str1 += s[s.length - 1];
    str2 += s[0];
    s = s.slice(1, s.length - 1);
  }

  let final = s;

  return [str1, str2, final];
};

console.log(popShift("exampletesthere"));
//[ 'erehtse', 'example', 't' ]
