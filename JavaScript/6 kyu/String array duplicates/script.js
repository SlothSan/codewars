/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

const dup = (s) =>
  s.map((str) => {
    let i = 0;
    let j = 1;
    let result = "";
    while (j < str.length) {
      if (str[i] !== str[j]) {
        result += str[i];
      }
      i = j;
      j++;
    }
    result += str[i];
    return result;
  });

console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
); //[ 'codewars', 'picaniny', 'hubububo' ]
