/*
Everybody knows a little german, right? But remembering the correct articles is a tough job. Write yourself a little helper, that returns the noun with the matching article:

each noun containing less than 2 vowels has the article "das"
each noun containing 2/3 vowels has the article "die"
each noun containing more than 3 vowels has the article "der"
Caution: Vowels are "a,e,i,o,u". Umlaute (ä ö ü) are also being counted!

(This Kata is a joke, there is no such grammar rule!)
*/

const derDieDas = (wort) => {
  let dasVowels = ["a", "e", "i", "o", "u", "ä", "ö", "ü"];
  let vowelCount = 0;
  for (let i = 0; i < wort.length; i++) {
    let curr = wort[i].toLowerCase();
    if (dasVowels.includes(curr)) vowelCount++;
  }
  return vowelCount < 2
    ? "das " + wort
    : vowelCount <= 3
    ? "die " + wort
    : "der " + wort;
};

console.log(derDieDas("Deutschland")); //die Deutschland
