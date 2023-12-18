/*
It's Friday the 13th, and Jason is ready for his first killing spree!

Create a function, killcount, that accepts two arguments: an array of array pairs (the conselor's name and intelligence - ["Chad", 2]) and an integer representing Jason's intellegence.

Ruby, Python, Crystal:

counselors = [["Chad", 2], ["Tommy", 9]]
jason = 7
JavaScript:

var counselors = [["Chad", 2], ["Tommy", 9]];
var jason = 7;
PHP:

$counselors = [["Chad", 2], ["Tommy", 9]];
$jason = 7;
Your function must return an array of the names of all the counselors who can be outsmarted and killed by Jason.

alt text

Happy Friday the 13th!
*/

const killcount = (counselors, jason) => {
  let killed = [];
  counselors.map((curr) => {
    if (curr[1] < jason) {
      killed.push(curr[0]);
    }
  });
  return killed;
};

console.log(
  killcount(
    [
      ["Mike", 7],
      ["Alysa", 3],
    ],
    7
  )
);
//[ 'Alysa' ]
