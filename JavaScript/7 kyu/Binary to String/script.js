/*
Your computer has forgotten how to speak ASCII! (or Unicode, whatever) It can only communicate in binary, and it has something important to tell you. Write a function which will receive a long string of binary code and convert it to a string. Remember, in Python binary output starts with '0b'.

As an example: binary_to_string('0b10000110b11000010b1110100') == 'Cat'

Input may consist of upper and lower case letters and numbers, in binary form of course, as well as special symbols. The input to your function will always be one string of binary.
*/

const binaryToString = (binary) => {
  return binary
    .split("0b")
    .filter(Boolean)
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
};

console.log(
  binaryToString(
    "0b10100110b11001010b11000110b11100100b11001010b11101000b1000000b11011010b11001010b11100110b11100110b11000010b11001110b11001010b1000000b110001"
  )
);

//Secret message 1
