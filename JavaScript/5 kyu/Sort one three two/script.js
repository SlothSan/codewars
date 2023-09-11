/*
Hey You !

Sort these integers for me ...

By name ...

Do it now !
Input

    Range is 0-999

    There may be duplicates

    The array may be empty

Example

    Input: 1, 2, 3, 4
    Equivalent names: "one", "two", "three", "four"
    Sorted by name: "four", "one", "three", "two"
    Output: 4, 1, 3, 2

Notes

    Don't pack words together:
    e.g. 99 may be "ninety nine" or "ninety-nine"; but not "ninetynine"
    e.g 101 may be "one hundred one" or "one hundred and one"; but not "onehundredone"
    Don't fret about formatting rules, because if rules are consistently applied it has no effect anyway:
    e.g. "one hundred one", "one hundred two"; is same order as "one hundred and one", "one hundred and two"
    e.g. "ninety eight", "ninety nine"; is same order as "ninety-eight", "ninety-nine"

*/

const integerToName = (num) => {
  const ones = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const teens = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  if (num === 0) return "zero";
  if (num < 10) return ones[num];
  if (num < 20) return teens[num - 10];
  if (num < 100)
    return (
      tens[Math.floor(num / 10)] + (num % 10 !== 0 ? " " + ones[num % 10] : "")
    );
  if (num < 1000)
    return (
      ones[Math.floor(num / 100)] +
      " hundred" +
      (num % 100 !== 0 ? " and " + integerToName(num % 100) : "")
    );
  return "out of range";
};

const sortByName = (arr) => {
  return arr.sort((a, b) => {
    const nameA = integerToName(a);
    const nameB = integerToName(b);
    return nameA.localeCompare(nameB);
  });
};

console.log(sortByName([9, 99, 999]));
//[ 9, 999, 99 ]
