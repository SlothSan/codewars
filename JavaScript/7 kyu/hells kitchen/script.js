/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/

const gordon = (a) => {
  const vowels = ["E", "I", "O", "U"];
  return a
    .toUpperCase()
    .split(" ")
    .map((word) => {
      return (
        word
          .split("")
          .map((letter) => {
            if (letter === "A") return (letter = "@");
            if (vowels.includes(letter)) return (letter = "*");
            return letter;
          })
          .join("") + "!!!!"
      );
    })
    .join(" ");
};

console.log(gordon("What feck damn cake")); //'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!'
