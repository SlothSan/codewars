/*
Task:
You have to write a function pattern which returns the following Pattern (See Pattern & Examples) upto n number of rows.

Note: Returning the pattern is not the same as Printing the pattern.
Rules/Note:
If n < 1 then it should return "" i.e. empty string.
There are no whitespaces in the pattern.
Pattern:
(n)(n-1)(n-2)...4321
(n)(n-1)(n-2)...432
(n)(n-1)(n-2)...43
(n)(n-1)(n-2)...4
...............
..............
(n)(n-1)(n-2)
(n)(n-1)
(n)
Examples:
pattern(4):

4321
432
43
4
pattern(11):

1110987654321
111098765432
11109876543
1110987654
111098765
11109876
1110987
111098
11109
1110
11
Hint: Use \n in string to jump to next line
List of all my katas
*/

const pattern = (n) => {
  if (n < 1) {
    return "";
  }

  let patternStr = "";
  for (let i = n; i > 0; i--) {
    patternStr += Array.from(
      { length: n - i + 1 },
      (_, index) => n - index
    ).join("");
    patternStr += "\n";
  }

  return patternStr.trimEnd().split("\n").reverse().join("\n");
};

console.log(pattern(2));
/*
21
2

*/
