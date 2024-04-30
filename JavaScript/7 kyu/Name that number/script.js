/*
In this kata, you'll be given an integer of range 0 <= x <= 99 and have to return that number spelt out in English. A few examples:

nameThatNumber(4)   // returns "four"
nameThatNumber(19)  // returns "nineteen"
nameThatNumber(99)  // returns "ninety nine"
Words should be separated by only spaces and not hyphens. No need to validate parameters, they will always be in the range [0, 99]. Make sure that the returned String has no leading of trailing spaces. Good luck!
*/

const nameThatNumber = (num) => {
  const units = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
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

  if (num < 20) {
    return units[num];
  } else {
    const ten = Math.floor(num / 10);
    const unit = num % 10;
    return tens[ten] + (unit !== 0 ? " " + units[unit] : "");
  }
};

console.log(nameThatNumber(99));
//ninety nine
