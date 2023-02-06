// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

const getNumberFromString = (string) => {
  return parseInt(
    string
      .split("")
      .filter(
        (character) => character >= 0 && character <= 9 && character !== " "
      )
      .join("")
  );
};

console.log(getNumberFromString("1")); // expect 1
console.log(getNumberFromString("$100 000 000")); // expect 100000000
