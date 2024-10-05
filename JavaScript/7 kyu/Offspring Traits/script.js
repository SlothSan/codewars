/*
A population of bears consists of black bears, brown bears, and white bears.

The input is an array of two elements.

Determine whether the offspring of the two bears will return 'black', 'brown', 'white', 'dark brown', 'grey', 'light brown', or 'unknown'.

Elements in the the array will always be a string.

Examples:
bear_fur(['black', 'black'])  returns 'black'

bear_fur(['brown', 'brown'])  returns 'brown'

bear_fur(['white', 'white'])  returns 'white'

bear_fur(['black', 'brown'])  returns 'dark brown'

bear_fur(['black', 'white'])  returns 'grey'

bear_fur(['brown', 'white'])  returns 'light brown'

bear_fur(['yellow', 'magenta'])  returns 'unknown'
*/

const bearFur = (parents) => {
  const [bear1, bear2] = parents.sort();
  if (bear1 === bear2) return bear1;
  if (bear1 === "black" && bear2 === "brown") return "dark brown";
  if (bear1 === "black" && bear2 === "white") return "grey";
  if (bear1 === "brown" && bear2 === "white") return "light brown";
  return "unknown";
};

console.log(bearFur(["black", "white"])); //grey
