/*
Mr. E Ven only likes even length words. Please create a translator so that he doesn't have to hear those pesky odd length words. For some reason he also hates punctuation, he likes his sentences to flow.

Your translator should take in a string and output it with all odd length words having an extra letter (the last letter in the word). It should also remove all punctuation (.,?!) as well as any underscores (_).

"How did we end up here? We go?" translated becomes-> "Howw didd we endd up here We go"

*/

const evenator = (str) =>
  str
    .replace(/[.,?!_]/g, "")
    .split(" ")
    .map((word) => {
      if (word.length % 2 === 0) {
        return word;
      } else {
        return word + word[word.length - 1];
      }
    })
    .join(" ");

console.log(evenator("I got a hole in 1!"));
//II gott aa hole in 11