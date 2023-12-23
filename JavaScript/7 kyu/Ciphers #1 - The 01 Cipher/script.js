/*
This is my first Kata in the Ciphers series. This series is meant to test our coding knowledge.

Ciphers #1 - The 01 Cipher
This cipher doesn't exist, I just created it by myself. It can't actually be used, as there isn't a way to decode it. It's a hash. Multiple sentences may also have the same result.

How this cipher works
It looks at the letter, and sees it's index in the alphabet, the alphabet being a-z, if you didn't know. If it is odd, it is replaced with 1, if it's even, its replaced with 0. Note that the index should start from 0. Also, if the character isn't a letter, it remains the same.

Example
encode("Hello World!"); // => "10110 00111!"
This is because H's index is 7, which is odd, so it is replaced by 1, and so on.

Have fun (en)coding!
*/

const encode = (plaintext) => {
  const lowercaseArray = [];
  for (let i = 97; i <= 122; i++) {
    lowercaseArray.push(String.fromCharCode(i));
  }
  return plaintext
    .toLowerCase()
    .split("")
    .map((char) => {
      if (lowercaseArray.includes(char)) {
        return lowercaseArray.indexOf(char) % 2 === 0 ? 0 : 1;
      } else {
        return char;
      }
    })
    .join("");
};

console.log(encode("Hello World!")); //10110 00111!
