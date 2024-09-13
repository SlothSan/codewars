/*
Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return the minimal number of steps to exit position [N-1, N-1] if it is possible to reach the exit from the starting position. Otherwise, return false.

Empty positions are marked .. Walls are marked W. Start and exit positions are guaranteed to be empty in all test cases.

Path Finder Series:
#1: can you reach the exit?
#2: shortest path
#3: the Alpinist
#4: where are you?
#5: there's someone here

*/

const pathFinder = (maze) => {
  const grid = maze.split("\n").map((row) => row.split(""));
  const N = grid.length;
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];
  let queue = [[0, 0, 0]];
  let visited = Array.from({ length: N }, () => Array(N).fill(false));
  visited[0][0] = true;

  while (queue.length) {
    let [x, y, steps] = queue.shift();
    if (x === N - 1 && y === N - 1) return steps;
    for (let [dx, dy] of directions) {
      let newX = x + dx,
        newY = y + dy;
      if (
        newX >= 0 &&
        newX < N &&
        newY >= 0 &&
        newY < N &&
        !visited[newX][newY] &&
        grid[newX][newY] === "."
      ) {
        visited[newX][newY] = true;
        queue.push([newX, newY, steps + 1]);
      }
    }
  }
  return false;
};

console.log(
  pathFinder(`.W.
.W.
...`)
); //4
