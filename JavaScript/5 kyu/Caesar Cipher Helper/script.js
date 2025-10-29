/*
Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

For example:

var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
c.encode('Codewars'); // returns 'HTIJBFWX'
c.decode('BFKKQJX'); // returns 'WAFFLES'
If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
The shift will always be in range of [1, 26].
*/

class CaesarCipher {
  constructor(shift) {
    this.shift = shift % 26;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encode(str) {
    return str
      .toUpperCase()
      .split("")
      .map((char) => {
        if (this.alphabet.includes(char)) {
          const index = this.alphabet.indexOf(char);
          return this.alphabet[(index + this.shift) % 26];
        }
        return char;
      })
      .join("");
  }

  decode(str) {
    return str
      .toUpperCase()
      .split("")
      .map((char) => {
        if (this.alphabet.includes(char)) {
          const index = this.alphabet.indexOf(char);
          return this.alphabet[(index - this.shift + 26) % 26];
        }
        return char;
      })
      .join("");
  }
}
