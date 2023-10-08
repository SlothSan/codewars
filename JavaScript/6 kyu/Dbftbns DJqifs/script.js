/*
Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher
Your task

Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.

Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.

Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!
Examples

A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.

A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.
*/

function encryptor(key, message) {
  const alphabetLower = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let encryptedMessage = "";
  for (let i = 0; i < message.length; i++) {
    const char = message[i];
    if (/[a-zA-Z]/.test(char)) {
      const isLowerCase = /[a-z]/.test(char);
      const alphabet = isLowerCase ? alphabetLower : alphabetUpper;
      const charIndex = alphabet.indexOf(char);
      let shiftedIndex = charIndex + (key % alphabet.length);
      if (shiftedIndex < 0) {
        shiftedIndex = alphabet.length + shiftedIndex;
      } else if (shiftedIndex >= alphabet.length) {
        shiftedIndex -= alphabet.length;
      }
      encryptedMessage += isLowerCase
        ? alphabetLower[shiftedIndex]
        : alphabetUpper[shiftedIndex];
    } else {
      encryptedMessage += char;
    }
  }

  return encryptedMessage;
}

console.log(encryptor(-46, "ErFob1?jC?sWnFk!J&pKdtfcE7Ju~xCYmHT"));
//'\'KxLuh1?pI?yCtLq!P&vQjzliK7Pa~dIEsNZ'
