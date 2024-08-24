/*
To code we decompose the given string in its decimal digits (in the above example: 1 0 1 1 1 2 1 3) and we will code each digit.

Coding process to code a number n expressed in base 10:
For each digit d of n

a) Let k be the number of bits of d

b) Write k-1 times the digit 0 followed by the digit 1

c) Write digit d as a binary string, with the rightmost bit being the least significant

d) Concat the result of b) and c) to get the coding of d

At last concatenate all the results got for the digits of n.

An example
So we code 0 as 10, 1 as 11, 2 as 0110, 3 as 0111 ... etc...

With the given process, the initial string "10111213" becomes: "11101111110110110111" resulting of concatenation of 11 10 11 11 11 0110 11 0111.

Task:
Given strng a string of digits representing a decimal number the function code(strng) should return the coding of strng as explained above.

Given a string strng resulting from the previous coding, decode it to get the corresponding decimal string.

Examples:
code("77338855") --> "001111001111011101110001100000011000001101001101"
code("77338")  --> "0011110011110111011100011000"
code("0011121314") --> "1010111111011011011111001100"

decode("001111001111011101110001100000011000001101001101") -> "77338855"
decode("0011110011110111011100011000") -> "77338"
decode("1010111111011011011111001100") -> "0011121314"
Notes
SHELL: The only tested function is decode.
Please could you ask before translating.
*/

const code = (strng) => {
  return strng
    .split("")
    .map((d) => {
      const digit = parseInt(d, 10);
      const binary = digit.toString(2);
      const leadingZeros = "0".repeat(binary.length - 1);
      return leadingZeros + "1" + binary;
    })
    .join("");
};

const decode = (strng) => {
  let i = 0,
    result = "";
  while (i < strng.length) {
    let zeros = 0;
    while (strng[i] === "0") {
      zeros++;
      i++;
    }
    i++;
    const binary = strng.substr(i, zeros + 1);
    result += parseInt(binary, 2).toString();
    i += zeros + 1;
  }
  return result;
};

console.log(code("62"));
console.log(decode(code("62")));

/*
0011100110
62
*/
