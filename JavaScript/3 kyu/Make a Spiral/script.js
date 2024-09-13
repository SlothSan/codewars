/*
Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/

const spiralize = (size) => {
  const matrix = Array.from({ length: size }, () =>
    Array.from({ length: size }, () =>
      Math.floor((size + 1) / 2) % 2 === 1 ? 1 : 0
    )
  );

  let spiral = 1;

  for (let i = 0; i < Math.floor(size / 2); i++) {
    for (let u = 0; u < size - i * 2; u++) {
      matrix[i][u + i] = spiral;
      matrix[u + i][i] = spiral;
      matrix[size - i - 1][u + i] = spiral;
      matrix[u + i][size - i - 1] = spiral;

      if (size % 4 === 0) {
        if (i !== Math.floor(size / 2) - 1) {
          matrix[i + 1][i] = 1 - spiral;
        }
      } else {
        matrix[i + 1][i] = 1 - spiral;
      }
    }
    spiral = 1 - spiral;
  }

  return matrix;
};

console.log(spiralize(10));
/*
[
  [
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1
  ],
  [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 1
  ],
  [
    1, 1, 1, 1, 1,
    1, 1, 1, 0, 1
  ],
  [
    1, 0, 0, 0, 0,
    0, 0, 1, 0, 1
  ],
  [
    1, 0, 1, 1, 1,
    1, 0, 1, 0, 1
  ],
  [
    1, 0, 1, 0, 0,
    1, 0, 1, 0, 1
  ],
  [
    1, 0, 1, 0, 0,
    0, 0, 1, 0, 1
  ],
  [
    1, 0, 1, 1, 1,
    1, 1, 1, 0, 1
  ],
  [
    1, 0, 0, 0, 0,
    0, 0, 0, 0, 1
  ],
  [
    1, 1, 1, 1, 1,
    1, 1, 1, 1, 1
  ]
]
*/
