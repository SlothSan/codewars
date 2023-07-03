/*
You are given a string of numbers between 0-9. Find the average of these numbers and return it as a floored whole number (ie: no decimal places) written out as a string. Eg:

"zero nine five two" -> "four"

If the string is empty or includes a number greater than 9, return "n/a"
*/

const averageString = (str) => {
  if (!str) return "n/a";
  const numberWords = [
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
  ];
  const numbers = str.trim().split(" ");
  for (let i = 0; i < numbers.length; i++) {
    if (!numberWords.includes(numbers[i])) {
      return "n/a";
    }
  }
  const total = numbers.reduce((sum, number) => {
    const numericValue = numberWords.indexOf(number);
    return sum + numericValue;
  }, 0);
  const average = Math.floor(total / numbers.length);
  return numberWords[average];
};

console.log(averageString("zero nine five two"));
//four
