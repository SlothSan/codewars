/*
Write a function, isItLetter or is_it_letter or IsItLetter, which tells us if a given character is a letter or not.
*/

const isItLetter = (character) => /[a-z]/g.test(character.toLowerCase());

console.log(isItLetter("A")); //true
