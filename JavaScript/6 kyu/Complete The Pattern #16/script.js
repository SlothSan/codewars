/*
Task:
You have to write a function pattern which returns the following Pattern(See Examples) upto n number of rows.

Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
The pattern should be created using only unit digits.
If n < 1 then it should return "" i.e. empty string.
The length of each line is same, and is equal to the number of characters in a line i.e n.
Range of Parameters (for the sake of CW Compiler) :
n ∈ (-50,150]
Examples:
pattern(8):

88888888
87777777
87666666
87655555
87654444
87654333
87654322
87654321
pattern(17):

77777777777777777
76666666666666666
76555555555555555
76544444444444444
76543333333333333
76543222222222222
76543211111111111
76543210000000000
76543210999999999
76543210988888888
76543210987777777
76543210987666666
76543210987655555
76543210987654444
76543210987654333
76543210987654322
76543210987654321
List of all my katas
*/

const pattern = (n) => {
  if (n < 1) return "";
  const lines = [];
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += j <= i ? (n - j) % 10 : (n - i) % 10;
    }
    lines.push(row);
  }
  return lines.join("\n");
};

console.log(pattern(10));
/*
0000000000
0999999999
0988888888
0987777777
0987666666
0987655555
0987654444
0987654333
0987654322
0987654321
*/