/*
Given a 2D array and a number of generations, compute n timesteps of Conway's Game of Life.

The rules of the game are:

Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
Any live cell with more than three live neighbours dies, as if by overcrowding.
Any live cell with two or three live neighbours lives on to the next generation.
Any dead cell with exactly three live neighbours becomes a live cell.
Each cell's neighborhood is the 8 cells immediately around it (i.e. Moore Neighborhood). The universe is infinite in both the x and y dimensions and all cells are initially dead - except for those specified in the arguments. The return value should be a 2d array cropped around all of the living cells. (If there are no living cells, then return [[]].)

For illustration purposes, 0 and 1 will be represented as ░░ and ▓▓ blocks respectively (PHP: plain black and white squares). You can take advantage of the htmlize function to get a text representation of the universe, e.g.:

console.log(htmlize(cells));
*/

const getGeneration = (cells, generations) => {
  let grid = cells.map((r) => [...r]);

  const expand = (g) => {
    const emptyRow = Array(g[0].length + 2).fill(0);
    const expanded = [emptyRow, ...g.map((r) => [0, ...r, 0]), emptyRow];
    return expanded;
  };

  const nextGen = (g) => {
    const res = g.map((r) => r.slice());
    for (let y = 0; y < g.length; y++) {
      for (let x = 0; x < g[0].length; x++) {
        let sum = 0;
        for (let dy = -1; dy <= 1; dy++)
          for (let dx = -1; dx <= 1; dx++)
            if (dx || dy) sum += g[y + dy]?.[x + dx] || 0;
        res[y][x] = sum === 3 || (g[y][x] && sum === 2) ? 1 : 0;
      }
    }
    return res;
  };

  const crop = (g) => {
    let top = 0,
      bottom = g.length - 1,
      left = 0,
      right = g[0].length - 1;
    while (top <= bottom && g[top].every((v) => !v)) top++;
    while (bottom >= top && g[bottom].every((v) => !v)) bottom--;
    while (left <= right && g.every((r) => !r[left])) left++;
    while (right >= left && g.every((r) => !r[right])) right--;
    if (top > bottom || left > right) return [[]];
    return g.slice(top, bottom + 1).map((r) => r.slice(left, right + 1));
  };

  for (let i = 0; i < generations; i++) grid = crop(nextGen(expand(grid)));
  return crop(grid);
};

console.log(
  getGeneration(
    [
      [1, 0, 0],
      [0, 1, 1],
      [1, 1, 0],
    ],
    2
  )
);

//[ [ 1, 0, 1 ], [ 0, 1, 1 ], [ 0, 1, 0 ] ]
