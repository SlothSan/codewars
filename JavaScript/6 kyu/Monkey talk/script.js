/*
Lets talk like a monkey. Find out how! Look at the test cases an engineer code to pass them.
*/

const monkeyTalk = (phrase) => {
  const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);

  return (
    phrase
      .split(" ")
      .map((word, idx) => {
        const monke = vowels.has(word[0]) ? "eek" : "ook";
        return idx === 0 ? monke[0].toUpperCase() + monke.slice(1) : monke;
      })
      .join(" ") + "."
  );
};

console.log(monkeyTalk("Hello World")); //Ook ook.
