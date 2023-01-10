const maze = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 3],
  [1, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1],
  [1, 2, 1, 0, 1, 0, 1],
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
  return {
    row,
    column
  }
}


const checkPosition = (maze, row, column) => {
  // console.log('Row is: ', row, 'Col is: ', column)
  const currentPosition = maze[row][column];
  // console.log('pos is: ', currentPosition)
  if(currentPosition === 'undefined' || currentPosition === 1) {
    return 'Dead';
  }
  if(currentPosition === 0) {
    return 'Continue';
  }
  if(currentPosition === 3) {
    return 'Finish';
  }
}

const mazeRunner = (maze, directions) => {
  let currentPosition = '';
  // find start position which will be maze[6][1] in the example maze
  let position = findStart(maze);
  for(let i = 0; i < directions.length; i++) {
    if(directions[i] === 'N') {
      currentPosition = checkPosition(maze, position.row-1, position.column)
      position.row--;
      if(position.row < 0) {
        return 'Dead';
      }
    }
    if(directions[i] === 'S') {
      currentPosition = checkPosition(maze, position.row+1, position.column)
      position.row++
      if(position.row > maze[0][0].length) {
        return 'Dead';
      }
    }
    if(directions[i] === 'E') {
      currentPosition = checkPosition(maze, position.row, position.column+1)
      position.column++;
      if(position.column > maze[0].length) {
        return 'Dead';
      }
    }
    if(directions[i] === 'W') {
      currentPosition = checkPosition(maze, position.row, position.column-1)
      position.column--;
      if(position.column < 0) {
        return 'Dead';
      }
    }
    if(currentPosition !== 'Continue') {
      break;
    }
    console.log(currentPosition);
  }
  if(currentPosition === 'Continue') {
    return 'Lost';
  }
  return currentPosition;
};

console.log(
  mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])
);
