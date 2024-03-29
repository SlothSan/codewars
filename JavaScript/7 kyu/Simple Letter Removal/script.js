/*
In this Kata, you will be given a lower case string and your task will be to remove k characters from that string using the following rule:

- first remove all letter 'a', followed by letter 'b', then 'c', etc...
- remove the leftmost character first.
For example: 
solve('abracadabra', 1) = 'bracadabra' # remove the leftmost 'a'.
solve('abracadabra', 2) = 'brcadabra'  # remove 2 'a' from the left.
solve('abracadabra', 6) = 'rcdbr'      # remove 5 'a', remove 1 'b' 
solve('abracadabra', 8) = 'rdr'
solve('abracadabra',50) = ''
More examples in the test cases. Good luck!

Please also try:

Simple time difference

Simple remove duplicates
*/

const solve = (s, k) => {
  if (k > s.length) return "";
  let intial = 97;
  let target = String.fromCharCode(intial);
  for (let i = 1; i <= k; i++) {
    while (!s.includes(target)) {
      intial++;
      target = String.fromCharCode(intial);
    }
    s = s.replace(target, "");
  }
  return s;
};

console.log(solve("abracadabra", 6)); //rcdbr
