/*
You are given a (small) check book as a - sometimes - cluttered (by non-alphanumeric characters) string:

"1000.00
125 Market 125.45
126 Hardware 34.95
127 Video 7.45
128 Book 14.32
129 Gasoline 16.10"
The first line shows the original balance. Each other line (when not blank) gives information: check number, category, check amount. (Input form may change depending on the language).

First you have to clean the lines keeping only letters, digits, dots and spaces.

Then return a report as a string (underscores show spaces -- don't put them in your solution. They are there so you can see them and how many of them you need to have):

"Original_Balance:_1000.00
125_Market_125.45_Balance_874.55
126_Hardware_34.95_Balance_839.60
127_Video_7.45_Balance_832.15
128_Book_14.32_Balance_817.83
129_Gasoline_16.10_Balance_801.73
Total_expense__198.27
Average_expense__39.65"
On each line of the report you have to add the new balance and then in the last two lines the total expense and the average expense. So as not to have a too long result string we don't ask for a properly formatted result.

Notes
See input examples in Sample Tests.
It may happen that one (or more) line(s) is (are) blank.
Round to 2 decimals your calculated results (Elm: without traling 0)
The line separator of results may depend on the language \n or \r\n. See examples in the "Sample tests".
R language: Don't use R's base function "mean()" that could give results slightly different from expected ones.
*/

const balance = (book) => {
  let lines = book
      .split(/\r?\n/)
      .map((l) => l.replace(/[^a-zA-Z0-9-_\. ]/g, ""))
      .filter((e) => e),
    b = parseFloat(lines[0]),
    arr = [];
  let parsed = lines.map((line, index) => {
    let nl = line.split(" "),
      pf = parseFloat(nl[2]);
    if (nl.length !== 1) {
      arr.push(pf);
      let nb = (b -= pf);
      return `${nl[0]} ${[nl[1]]} ${pf.toFixed(2)} Balance ${nb.toFixed(2)}`;
    }
    return `Original Balance: ${b.toFixed(2)}`;
  });
  let sum = arr.reduce((a, n) => a + n, 0).toFixed(2),
    avg = sum / arr.length;
  parsed.push(`Total expense  ${sum}`, `Average expense  ${avg.toFixed(2)}`);
  return parsed.join("\r\n");
};

const b1 = `1000.00!=

125 Market !=:125.45
126 Hardware =34.95
127 Video! 7.45
128 Book :14.32
129 Gasoline ::16.10
`;

console.log(balance(b1));
/*
Original Balance: 1000.00
125 Market 125.45 Balance 874.55
126 Hardware 34.95 Balance 839.60
127 Video 7.45 Balance 832.15
128 Book 14.32 Balance 817.83
129 Gasoline 16.10 Balance 801.73
Total expense  198.27
Average expense  39.65
*/
