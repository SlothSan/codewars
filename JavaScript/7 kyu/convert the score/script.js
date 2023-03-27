/*

*/
const scoreboard = (string) => {
  let scoreMap = {
    nil: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  string = string.split(" ");
  return [
    scoreMap[string[string.length - 2]],
    scoreMap[string[string.length - 1]],
  ];
};

console.log(scoreboard("The score is four nil")); //[ 4, 0 ]
