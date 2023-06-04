/*
Write a simple parser that will parse and run Deadfish.

Deadfish has 4 commands, each 1 character long:

i increments the value (initially 0)
d decrements the value
s squares the value
o outputs the value into the return array
Invalid characters should be ignored.

parse("iiisdoso") => [ 8, 64 ]
*/

const parse = (data) => {
  let deadfish = 0;
  let output = [];
  data.split("").map((command) => {
    if (command === "i") deadfish++;
    if (command === "d") deadfish--;
    if (command === "s") deadfish = deadfish ** 2;
    if (command === "o") output.push(deadfish);
  });
  return output;
};

console.log(parse("iiisdoso")); //[ 8, 64 ]
