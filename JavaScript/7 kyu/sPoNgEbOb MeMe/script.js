/*
Remember the spongebob meme that is meant to make fun of people by repeating what they say in a mocking way?

"Dont use that weird spongebob mocking meme" Me: DonT uSe thAt WeIrd SpoNgEboB MoCkinG MEme

You need to create a function that converts the input into this format, with the output being the same string expect there is a pattern of uppercase and lowercase letters.

Example:

input:  "stop Making spongebob Memes!"
output: "StOp mAkInG SpOnGeBoB MeMeS!"
*/

const spongeMeme = (sentence) =>
  sentence
    .split("")
    .map((element, index) =>
      index % 2 !== 0 ? element.toLowerCase() : element.toUpperCase()
    )
    .join("");

console.log(spongeMeme("stop Making spongebob Memes!")); //StOp mAkInG SpOnGeBoB MeMeS!
