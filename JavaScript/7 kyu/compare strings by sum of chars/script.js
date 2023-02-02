/*Compare two strings by comparing the sum of their values (ASCII character code).

For comparing treat all letters as UpperCase
null/NULL/Nil/None should be treated as empty strings
If the string contains other characters than letters, treat the whole string as it would be empty
Your method should return true, if the strings are equal and false if they are not equal.

Examples:
"AD", "BC"  -> equal
"AD", "DD"  -> not equal
"gf", "FG"  -> equal
"zz1", ""   -> equal (both are considered empty)
"ZzZz", "ffPFF" -> equal
"kl", "lz"  -> not equal
null, ""    -> equal */

const compare = (s1, s2) => {
  const strSum = (st) => {
    let sum = 0;
    if (st == null || st == "" || st.match(/[\W\d]/)) {
      sum = 0;
    } else {
      st = st.toUpperCase();
      for (let i = 0; i < st.length; i++) {
        sum += st.charCodeAt(i);
      }
    }
    return sum;
  };
  return strSum(s1) == strSum(s2);
};

console.log(compare("zz1", ""));
