/*
Given a string of binary numbers of length 3 sort the numbers in ascending order but only order the even numbers and leave all odd numbers in their place.

Example:

evenBinary("101 111 100 001 010") // returns "101 111 010 001 100"
Note: make sure all the binary numbers have a length of 3
*/

const evenBinary = (str) => {
  let binaries = str.split(" ");
  let evenBinaries = binaries
    .filter((num) => parseInt(num, 2) % 2 === 0)
    .sort((a, b) => parseInt(a, 2) - parseInt(b, 2));
  let evenIndex = 0;
  return binaries
    .map((num) =>
      parseInt(num, 2) % 2 === 0 ? evenBinaries[evenIndex++] : num
    )
    .join(" ");
};

console.log(evenBinary("101 111 100 001 010"));
//101 111 010 001 100
