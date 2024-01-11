/*
How many bees are in the beehive?
bees can be facing UP, DOWN, LEFT, or RIGHT
bees can share parts of other bees
Examples
Ex1

bee.bee     
.e..e..
.b..eeb
Answer: 5

Ex2

bee.bee     
e.e.e.e
eeb.eeb
Answer: 8

Notes
The hive may be empty or null/None/nil/...
Python: the hive is passed as a list of lists (not a list of strings)
*/

const howManyBees = (hive) => {
  let result = 0;
  if (hive === null) {
    return 0;
  }
  for (let i = 0; i < hive.length; i++) {
    for (let j = 0; j < hive[0].length; j++) {
      if (i > 1 && hive[i][j] == "b") {
        if (hive[i - 1][j] == "e" && hive[i - 2][j] == "e") {
          result++;
        }
      }
      if (i < hive.length - 2 && hive[i][j] == "b") {
        if (hive[i + 1][j] == "e" && hive[i + 2][j] == "e") {
          result++;
        }
      }
      if (j > 1 && hive[i][j] == "b") {
        if (hive[i][j - 1] == "e" && hive[i][j - 2] == "e") {
          result++;
        }
      }
      if (j < hive[i].length - 2 && hive[i][j] == "b") {
        if (hive[i][j + 1] == "e" && hive[i][j + 2] == "e") {
          result++;
        }
      }
    }
  }
  return result;
};

console.log(
  howManyBees([
    ["b", "e", "e", ".", "b", "e", "e"],
    ["e", ".", "e", ".", "e", ".", "e"],
    ["e", "e", "b", ".", "e", "e", "b"],
  ])
); //8
