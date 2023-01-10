const maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
  [1, 3, 1, 0, 1, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 0, 0, 0, 0],
  [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 2, 1],
];

/*
Maze key is as below       
      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point


1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/

const findStart = (maze) => {
  const mazeCols = maze[0].length;
  const startPosition = maze.flat().indexOf(2);
  const row = Math.floor(startPosition / mazeCols);
  const column = startPosition - row * mazeCols;
  const max = mazeCols;
  return {
    row,
    column,
    max,
  };
};

const checkPosition = (maze, row, column, max) => {
  console.log(row, column, max);
  if (row < 0 || row >= max || column < 0 || column >= max) {
    return "Dead";
  }
  const currentPosition = maze[row][column];
  // console.log('pos is: ', currentPosition)
  if (currentPosition === "undefined" || currentPosition === 1) {
    return "Dead";
  }
  if (currentPosition === 0 || currentPosition === 2) {
    return "Lost";
  }
  if (currentPosition === 3) {
    return "Finish";
  }
  console.log('Current Position is:', currentPosition)
};

const mazeRunner = (maze, directions) => {
  let newPosition = "";
  // find start position which will be maze[6][1] in the example maze
  let position = findStart(maze);
  console.log(position);
  for (let i = 0; i < directions.length; i++) {
    console.log("On Direction No: ", i);
    if (newPosition === "Dead" || newPosition === "Finish") {
      return newPosition;
    }
    if (directions[i] === "N") {
      position.row--;
      newPosition = checkPosition(
        maze,
        position.row,
        position.column,
        position.max
      );
    }
    if (directions[i] === "S") {
      position.row++;
      newPosition = checkPosition(
        maze,
        position.row,
        position.column,
        position.max
      );
    }
    if (directions[i] === "E") {
      position.column++;
      newPosition = checkPosition(
        maze,
        position.row,
        position.column,
        position.max
      );
    }
    if (directions[i] === "W") {
      position.column--;
      newPosition = checkPosition(
        maze,
        position.row,
        position.column,
        position.max
      );
    }
  }
  return newPosition;
};

// console.log(
//   mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])
// );

console.log(
  mazeRunner(maze, [
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "N",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
    "S",
  ])
);
