/*
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.

The Office I - Outed
The Office II - Boredeom Score
The Office IV - Find a Meeting Room
The Office V - Find a Chair
*/

const broken = (x) => {
  return x
    .split("")
    .map((element) => {
      return element === "0" ? (element = 1) : (element = 0);
    })
    .join("");
};

console.log(broken("10000000101101111110011001000")); //01111111010010000001100110111
