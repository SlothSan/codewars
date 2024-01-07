/*
Take a string and return a hash with all the ascii values of the characters in the string. Returns nil if the string is empty. The key is the character, and the value is the ascii value of the character. Repeated characters are to be ignored and non-alphebetic characters as well.
*/

function charToAscii(str) {
  if (str.length === 0) {
    return null;
  }

  const asciiHash = {};

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (/^[a-zA-Z]$/.test(char) && !asciiHash.hasOwnProperty(char)) {
      asciiHash[char] = char.charCodeAt(0);
    }
  }

  return Object.keys(asciiHash).length === 0 ? null : asciiHash;
}

console.log(charToAscii("Hello World"));
//{ H: 72, e: 101, l: 108, o: 111, W: 87, r: 114, d: 100 }
