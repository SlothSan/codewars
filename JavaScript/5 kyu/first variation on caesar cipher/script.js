/*
The action of a Caesar cipher is to replace each plaintext letter (plaintext letters are from 'a' to 'z' or from 'A' to 'Z') with a different one a fixed number of places up or down the alphabet.

This program performs a variation of the Caesar shift. The shift increases by 1 for each character (on each iteration).

If the shift is initially 1, the first character of the message to be encoded will be shifted by 1, the second character will be shifted by 2, etc...

Coding: Parameters and return of function "movingShift"
param s: a string to be coded

param shift: an integer giving the initial shift

The function "movingShift" first codes the entire string and then returns an array of strings containing the coded string in 5 parts (five parts because, to avoid more risks, the coded message will be given to five runners, one piece for each runner).

If possible the message will be equally divided by message length between the five runners. If this is not possible, parts 1 to 5 will have subsequently non-increasing lengths, such that parts 1 to 4 are at least as long as when evenly divided, but at most 1 longer. If the last part is the empty string this empty string must be shown in the resulting array.

For example, if the coded message has a length of 17 the five parts will have lengths of 4, 4, 4, 4, 1. The parts 1, 2, 3, 4 are evenly split and the last part of length 1 is shorter. If the length is 16 the parts will be of lengths 4, 4, 4, 4, 0. Parts 1, 2, 3, 4 are evenly split and the fifth runner will stay at home since his part is the empty string. If the length is 11, equal parts would be of length 2.2, hence parts will be of lengths 3, 3, 3, 2, 0.

You will also implement a "demovingShift" function with two parameters

Decoding: parameters and return of function "demovingShift"
an array of strings: s (possibly resulting from "movingShift", with 5 strings)

an int shift

"demovingShift" returns a string.

Example:
u = "I should have known that you would have a perfect answer for me!!!"

movingShift(u, 1) returns :

v = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

(quotes added in order to see the strings and the spaces, your program won't write these quotes, see Example Test Cases)

and demovingShift(v, 1) returns u. #Ref:

Caesar Cipher : http://en.wikipedia.org/wiki/Caesar_cipher
*/

const movingShift = (s, shift) => {
  let length = s.length;
  let fLength, sLength;
  for (let i = Math.floor(length / 4); i > 0; i--) {
    fLength = length - 4 * i;
    if (fLength > i) {
      sLength = i + 1;
      break;
    }
  }
  fLength = length - 4 * sLength;
  let str = "",
    result = [];
  for (let i = 0; i < length; i++) {
    if (
      (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) ||
      (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122)
    ) {
      let value = s[i].charCodeAt() + shift + i;
      if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 && value > 90) {
        let rest = Math.floor((value - 65) / 26);
        str += String.fromCharCode(value - rest * 26);
      } else if (
        s[i].charCodeAt() >= 97 &&
        s[i].charCodeAt() <= 122 &&
        value > 122
      ) {
        let rest = Math.floor((value - 97) / 26);
        str += String.fromCharCode(value - rest * 26);
      } else {
        str += String.fromCharCode(value);
      }
    } else {
      str += s[i];
    }
  }
  for (let k = 0; k < 4; k++) {
    result.push(str.slice(sLength * k, sLength * (k + 1)));
  }
  result.push(str.slice(sLength * 4));
  return result;
};

const demovingShift = (arr, shift) => {
  let str = "";
  let step = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (
        (arr[i][j].charCodeAt() >= 65 && arr[i][j].charCodeAt() <= 90) ||
        (arr[i][j].charCodeAt() >= 97 && arr[i][j].charCodeAt() <= 122)
      ) {
        let value = arr[i][j].charCodeAt() - shift - step;
        if (
          arr[i][j].charCodeAt() >= 65 &&
          arr[i][j].charCodeAt() <= 90 &&
          value < 65
        ) {
          let rest = Math.ceil((65 - value) / 26);
          str += String.fromCharCode(value + rest * 26);
        } else if (
          arr[i][j].charCodeAt() >= 97 &&
          arr[i][j].charCodeAt() <= 122 &&
          value < 97
        ) {
          let rest = Math.ceil((97 - value) / 26);
          str += String.fromCharCode(value + rest * 26);
        } else {
          str += String.fromCharCode(value);
        }
        step++;
      } else {
        str += arr[i][j];
        step++;
      }
    }
  }
  return str;
};

let string =
  "I should have known that you would have a perfect answer for me!!!";

console.log(movingShift(string, 1)); //"[J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!]"
console.log(
  demovingShift(
    [
      "J vltasl rlhr ",
      "zdfog odxr ypw",
      " atasl rlhr p ",
      "gwkzzyq zntyhv",
      " lvz wp!!!",
    ],
    1
  )
); //I should have known that you would have a perfect answer for me!!!
