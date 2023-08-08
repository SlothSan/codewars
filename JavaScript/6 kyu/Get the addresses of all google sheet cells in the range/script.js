/*

Task
Your task is to write a function that takes a range of Google Sheets cells as a parameter, and returns an array of addresses of all cells in the specified range.

example
Notes
Letters in addresses: from A-Z (Google Sheets should not be confused with Excel spreadsheets. In Excel, the "Z" column is followed by "AA", etc. In Google Sheets, the last column is "Z")

The final array must be sorted by the number in each address (ascending)

The letters in the addresses must go in alphabetical order (A to Z).

For example, if the range is "A1:C3", the function should return [ "A1", "B1", "C1", "A2", "B2", "C2", "A3", "B3", "C3" ],
not [ "B1", "A1", "C1", "C2", "B2", "A2", "A3", "C3", "B3" ] or something else.

If an invalid range is passed to the function, the function should return [].
The ranges that are considered to be invalid:

Those in which the first cell is further away than the second.
Example: H7:F3
Those in which two identical cells are specified.
Example: C2:C2
In Google Sheets you cannot find such a range, because it is considered as one cell. For this reason, such a range is invalid in this kata.

More examples
"B1:H5":

[
    "B1", "C1", "D1", "E1", "F1", "G1", "H1",
    "B2", "C2", "D2", "E2", "F2", "G2", "H2", 
    "B3", "C3", "D3", "E3", "F3", "G3", "H3", 
    "B4", "C4", "D4", "E4", "F4", "G4", "H4",
    "B5", "C5", "D5", "E5", "F5", "G5", "H5"
]
"A2:B3":

[ "A2", "B2", "A3", "B3" ]
"A1:A5":

[ "A1", "A2", "A3", "A4", "A5" ]
"X8:Z20":

[
    "X8",  "Y8",  "Z8",  
    "X9",  "Y9",  "Z9",  
    "X10", "Y10", "Z10", 
    "X11", "Y11", "Z11",
    "X12", "Y12", "Z12",
    "X13", "Y13", "Z13", 
    "X14", "Y14", "Z14", 
    "X15", "Y15", "Z15", 
    "X16", "Y16", "Z16", 
    "X17", "Y17", "Z17",
    "X18", "Y18", "Z18", 
    "X19", "Y19", "Z19", 
    "X20", "Y20", "Z20"
]
"E345:J346":

[
    "E345", "F345", "G345", "H345", "I345", "J345",
    "E346", "F346", "G346", "H346", "I346", "J346"
]
*/

const isValidRange = (range) => {
  const pattern = /^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;
  const match = range.match(pattern);

  if (!match) return false;

  const [_, col1, row1, col2, row2] = match;
  const diffCol = col2.charCodeAt(0) - col1.charCodeAt(0);
  const diffRow = parseInt(row2, 10) - parseInt(row1, 10);

  return diffCol >= 0 && diffRow >= 0 && !(diffCol === 0 && diffRow === 0);
};

const getCellAddresses = (range) => {
  if (!isValidRange(range)) return [];

  const pattern = /^([A-Z]+)(\d+):([A-Z]+)(\d+)$/;
  const match = range.match(pattern);

  const [_, col1, row1, col2, row2] = match;
  const diffCol = col2.charCodeAt(0) - col1.charCodeAt(0);
  const diffRow = parseInt(row2, 10) - parseInt(row1, 10);

  const addresses = [];

  for (let i = 0; i <= diffRow; i++) {
    for (let j = 0; j <= diffCol; j++) {
      const colChar = String.fromCharCode(col1.charCodeAt(0) + j);
      const row = parseInt(row1, 10) + i;
      addresses.push(`${colChar}${row}`);
    }
  }

  return addresses;
};

console.log(getCellAddresses("W118:Z124"));

/*
[
  'W118', 'X118', 'Y118', 'Z118',
  'W119', 'X119', 'Y119', 'Z119',
  'W120', 'X120', 'Y120', 'Z120',
  'W121', 'X121', 'Y121', 'Z121',
  'W122', 'X122', 'Y122', 'Z122',
  'W123', 'X123', 'Y123', 'Z123',
  'W124', 'X124', 'Y124', 'Z124'
]
*/
