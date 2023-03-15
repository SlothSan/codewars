/*
Description:
Move all exclamation marks to the end of the sentence

Examples
remove("Hi!") === "Hi!"
remove("Hi! Hi!") === "Hi Hi!!"
remove("Hi! Hi! Hi!") === "Hi Hi Hi!!!"
remove("Hi! !Hi Hi!") === "Hi Hi Hi!!!"
remove("Hi! Hi!! Hi!") === "Hi Hi Hi!!!!"
*/

const remove = (string) =>
  string.replace(/!/g, "") + (string.match(/!/g) || []).join("");

console.log(remove("Hi! !Hi Hi!")); //Hi Hi Hi!!!
