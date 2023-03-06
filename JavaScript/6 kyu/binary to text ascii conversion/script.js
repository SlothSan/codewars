/*
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/

const binaryToString = (binary) => {
  let chunks = [];
  for (let i = 0, charsLength = binary.length; i < charsLength; i += 8) {
    chunks.push(binary.substring(i, i + 8));
  }
  return chunks
    .map((chunk) => {
      return String.fromCharCode(parseInt(chunk, 2));
    })
    .join("");
};

console.log(
  binaryToString("01001011010101000100100001011000010000100101100101000101")
); //KTHXBYE
