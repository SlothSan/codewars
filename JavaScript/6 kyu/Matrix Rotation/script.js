/*
Given a matrix represented as a list of string, such as

###.....
..###...
....###.
.....###
.....###
....###.
..###...
###.....

write a function

rotateClockwise(matrix)

that return its 90° clockwise rotation, for our example:

#......#
#......#
##....##
.#....#.
.##..##.
..####..
..####..
...##...

    /!\ You must return a rotated copy of matrix! (matrix must be the same before and after calling your function)
    Note that the matrix isn't necessarily a square, though it's always a rectangle!
    Please also note that the equality m == rotateClockwise(rotateClockwise(rotateClockwise(rotateClockwise(m)))); (360° clockwise rotation), is not always true because rotateClockwise(['']) => [] and rotateClockwise(['','','']) => [] (empty lines information is lost)
 */

const rotateClockwise = (matrix) => {
    if (matrix.length === 0 || matrix[0].length === 0) return [];

    const rows = matrix.length;
    const cols = matrix[0].length;

    const rotatedMatrix = Array.from({ length: cols }, () => '');

    for (let col = 0; col < cols; col++) {
        for (let row = rows - 1; row >= 0; row--) {
            rotatedMatrix[col] += matrix[row][col];
        }
    }

    return rotatedMatrix;
}

console.log(rotateClockwise(
    ["###.....",
    "..###...",
    "....###.",
    ".....###",
    ".....###",
    "....###.",
    "..###...",
    "###.....",]))

/*
[
  '#......#',
  '#......#',
  '##....##',
  '.#....#.',
  '.##..##.',
  '..####..',
  '..####..',
  '...##...'
]
 */