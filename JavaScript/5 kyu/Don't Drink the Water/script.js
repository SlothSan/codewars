/*
Don't Drink the Water

Given a two-dimensional array representation of a glass of mixed liquids, sort the array such that the liquids appear in the glass based on their density. (Lower density floats to the top) The width of the glass will not change from top to bottom.

======================
|   Density Chart    |
======================
| Honey   | H | 1.36 |
| Water   | W | 1.00 |
| Alcohol | A | 0.87 |
| Oil     | O | 0.80 |
----------------------

{                             {
  { 'H', 'H', 'W', 'O' },        { 'O','O','O','O' },
  { 'W', 'W', 'O', 'W' },  =>    { 'W','W','W','W' },
  { 'H', 'H', 'O', 'O' }         { 'H','H','H','H' }
}                             }
 
The glass representation may be larger or smaller. If a liquid doesn't fill a row, it floats to the top and to the left.
*/

const separateLiquids = (glass) => {
  if (glass.length < 1) return [];
  const densityChart = {
    H: 1.36,
    W: 1.0,
    A: 0.87,
    O: 0.8,
  };

  const height = glass.length;
  const width = glass[0].length;
  const flattenedGlass = [];
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      flattenedGlass.push(glass[i][j]);
    }
  }
  flattenedGlass.sort((a, b) => densityChart[a] - densityChart[b]);
  const sortedGlass = [];
  let index = 0;
  for (let i = 0; i < height; i++) {
    sortedGlass[i] = [];
    for (let j = 0; j < width; j++) {
      sortedGlass[i][j] = flattenedGlass[index];
      index++;
    }
  }
  return sortedGlass;
};

console.log(
  separateLiquids([
    ["A", "A", "O", "H"],
    ["A", "H", "W", "O"],
    ["W", "W", "A", "W"],
    ["H", "H", "O", "O"],
  ])
);

/*
[
  [ 'O', 'O', 'O', 'O' ],
  [ 'A', 'A', 'A', 'A' ],
  [ 'W', 'W', 'W', 'W' ],
  [ 'H', 'H', 'H', 'H' ]
]
*/
