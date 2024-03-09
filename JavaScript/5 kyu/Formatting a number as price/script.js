/* 
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

const numberToPrice = (number) => {
  if (typeof number !== "number" || isNaN(number)) {
    return "NaN";
  }
  let formattedNumber = Math.abs(number).toLocaleString("en", {
    maximumFractionDigits: 3,
  });
  let parts = formattedNumber.split(".");

  if (parts.length === 1) {
    parts.push("00");
  } else if (parts[1].length === 1) {
    parts[1] += "0";
  } else if (parts[1].length > 2) {
    parts[1] = parts[1].slice(0, 2);
  }

  formattedNumber = parts.join(".");

  if (number < 0) {
    formattedNumber = "-" + formattedNumber;
  }

  return formattedNumber;
};

console.log(numberToPrice(1500.129)); //1,500.12
