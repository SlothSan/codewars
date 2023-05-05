/*
Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
*/

const hexHash = (code) => {
  code = code
    .split("")
    .map((letter) => {
      return letter.charCodeAt(0).toString(16);
    })
    .join("")
    .match(/([0-9])+/g);

  return code
    ? code
        .join("")
        .split("")
        .reduce((acc, curr) => acc + Number(curr), 0)
    : 0;
};

console.log(hexHash("Forty4Three")); //113
