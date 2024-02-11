/*
Given a string that includes alphanumeric characters ("3a4B2d") return the expansion of that string: The numeric values represent the occurrence of each letter preceding that numeric value. There should be no numeric characters in the final string.

Notes
The first occurrence of a numeric value should be the number of times each character behind it is repeated, until the next numeric value appears
If there are multiple consecutive numeric characters, only the last one should be used (ignore the previous ones)
Empty strings should return an empty string.
Your code should be able to work for both lower and capital case letters.

"3D2a5d2f"  -->  "DDDaadddddff"    # basic example: 3 * "D" + 2 * "a" + 5 * "d" + 2 * "f"
"3abc"      -->  "aaabbbccc"       # not "aaabc", nor "abcabcabc"; 3 * "a" + 3 * "b" + 3 * "c"
"3d332f2a"  -->  "dddffaa"         # multiple consecutive digits: 3 * "d" + 2 * "f" + 2 * "a"
"abcde"     -->  "abcde"           # no digits
"1111"      -->  ""                # no characters to repeat
""          -->  ""                # empty string

*/

const stringExpansion = (s) => {
  if (!/\d/g.test(s)) return s;
  if (/^\d+$/g.test(s)) return "";
  let result = "";
  let repeatNum = 0;
  let seenNum = false;
  let sArr = s.split(/(\d\w){0}/g).filter((element) => element);
  for (let i = 0; i < sArr.length; i++) {
    let curr = sArr[i];
    if (/[0-9]/g.test(curr)) {
      repeatNum = parseInt(curr);
      seenNum = true;
    } else {
      if (!seenNum) {
        result += curr;
      }
      result += curr.repeat(repeatNum);
    }
  }
  return result;
};

console.log(stringExpansion("3abc"));
//aaabbbccc
