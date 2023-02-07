/*
Write function alternateCase which switch every letter in string from upper to lower and from lower to upper. E.g: Hello World -> hELLO wORLD */

function alternateCase(s) {
  return s
    .split("")
    .map(function (letter) {
      return letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase();
    })
    .join("");
}

console.log(alternateCase("hELLO wORLD")); //Expect Hello World
