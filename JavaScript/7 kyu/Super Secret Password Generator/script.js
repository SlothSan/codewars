/*
Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.

*/

const createSSP = (password) => {
  const superSecretChars = {
    a: "@",
    A: "@",
    o: "0",
    O: "0",
    s: "$",
    S: "$",
    h: "5",
    H: "5",
    x: "*",
    X: "*",
  };
  let unhackablePassword = "";
  for (let char of password) {
    if (superSecretChars[char]) {
      unhackablePassword += superSecretChars[char];
    } else {
      unhackablePassword += char;
    }
  }

  return unhackablePassword;
};

console.log(createSSP("Codewars")); //C0dew@r$
