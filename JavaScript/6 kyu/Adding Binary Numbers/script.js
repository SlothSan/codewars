/*
##Task: You have to write a function add which takes two binary numbers as strings and returns their sum as a string.

##Note:

    You are not allowed to convert binary to decimal & vice versa.
    The sum should contain No leading zeroes.

##Examples:

add('111','10'); => '1001'
add('1101','101'); => '10010'
add('1101','10111') => '100100'


*/

const add = (a, b) => {
  let result = "";
  let carry = 0;

  // Make the binary strings of equal length by adding leading zeroes
  while (a.length < b.length) {
    a = "0" + a;
  }
  while (b.length < a.length) {
    b = "0" + b;
  }

  for (let i = a.length - 1; i >= 0; i--) {
    const bitA = a[i] === "1" ? 1 : 0;
    const bitB = b[i] === "1" ? 1 : 0;

    const sum = (bitA + bitB + carry) % 2;
    carry = Math.floor((bitA + bitB + carry) / 2);

    result = sum + result;
  }
  if (carry) {
    result = carry + result;
  }

  result = result.replace(/^0+/, "");

  return result || "0"; // If the result is empty, return '0'
};

console.log(add("1101", "10111"));
//100100
