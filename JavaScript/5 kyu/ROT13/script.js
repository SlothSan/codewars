/*
How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"
*/

const rot13 = (str) => {
  return str
    .split("")
    .map((letter) => {
      if (/[A-Za-z]/.test(letter)) {
        const isUpper = /[A-Z]/.test(letter);
        const charCode = letter.charCodeAt(0);
        return String.fromCharCode(
          isUpper
            ? ((charCode - 65 + 13) % 26) + 65
            : ((charCode - 97 + 13) % 26) + 97
        );
      } else {
        return letter;
      }
    })
    .join("");
};

console.log(rot13("EBG13 rknzcyr.")); //ROT13 example.
