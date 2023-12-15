/*
Write the definition of the function "say" such that calling this:

say("Hello")("World")
returns "Hello World"
*/

const say = (firstWord) => {
  return function (secondWord) {
    return `${firstWord} ${secondWord}`;
  };
};

console.log(say("Hello")("World"));
//Hello World
