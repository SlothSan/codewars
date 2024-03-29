/*
You've just finished writing the last chapter for your novel when a virus suddenly infects your document. It has swapped the 'i's and 'e's in 'ei' words and capitalised random letters. Write a function which will:

a) remove the spelling errors in 'ei' words. (Example of 'ei' words: their, caffeine, deceive, weight)

b) only capitalise the first letter of each sentence. Make sure the rest of the sentence is in lower case.

Example: He haD iEght ShOTs of CAffIEne. --> He had eight shots of caffeine.
*/

const proofread = (str) => {
  return str
    .split(". ")
    .map((line) => line[0].toUpperCase() + line.slice(1).toLowerCase())
    .join(". ")
    .replace(/ie/g, "ei");
};

console.log(
  proofread("ThiEr DEcIEt wAs INconcIEVablE. sHe SIeZeD thE moMENT.")
);
//Their deceit was inconceivable. She seized the moment.
