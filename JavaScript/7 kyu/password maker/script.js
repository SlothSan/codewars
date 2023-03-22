/*
One suggestion to build a satisfactory password is to start with a memorable phrase or sentence and make a password by extracting the first letter of each word.

Even better is to replace some of those letters with numbers (e.g., the letter O can be replaced with the number 0):

instead of including i or I put the number 1 in the password;
instead of including o or O put the number 0 in the password;
instead of including s or S put the number 5 in the password.
Examples:
"Give me liberty or give me death"  --> "Gml0gmd"
"Keep Calm and Carry On"            --> "KCaC0"
*/

const makePassword = (phrase) => {
  return phrase
    .split(" ")
    .map((word) => {
      let firstLetter = word.charAt(0);
      if (firstLetter === "i" || firstLetter === "I") {
        return "1";
      } else if (firstLetter === "o" || firstLetter === "O") {
        return "0";
      } else if (firstLetter === "s" || firstLetter === "S") {
        return "5";
      } else {
        return firstLetter;
      }
    })
    .join("");
};

console.log(makePassword("Give me liberty or give me death")); //Gml0gmd
