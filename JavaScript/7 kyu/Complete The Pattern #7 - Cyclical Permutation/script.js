/*
Task:
You have to write a function pattern which creates the following pattern (See Examples) upto desired number of rows.

If the Argument is 0 or a Negative Integer then it should return "" i.e. empty string.

Examples:
pattern(9):

123456789
234567891
345678912
456789123
567891234
678912345
789123456
891234567
912345678
pattern(5):

12345
23451
34512
45123
51234
Note: There are no spaces in the pattern

Hint: Use \n in string to jump to next line
*/

const pattern = (n) => {
  if (n <= 0) {
    return "";
  }

  let result = [];
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = i; j <= n + i - 1; j++) {
      line += j > n ? j - n : j;
    }
    result.push(line);
  }

  return result.join("\n");
};

console.log(pattern(10));

/*
12345678910
23456789101
34567891012
45678910123
56789101234
67891012345
78910123456
89101234567
91012345678
10123456789
*/
