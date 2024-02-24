/*
For a given 2D vector described by cartesian coordinates of its initial point and terminal point in the following format:

[[x1, y1], [x2, y2]]

Your function must return the vector's length represented as a floating point number.
Error must be within 1e-7.

Coordinates can be integers or floating point numbers.
*/

function vectorLength(vector) {
  const [x1, y1] = vector[0];
  const [x2, y2] = vector[1];

  const deltaX = x2 - x1;
  const deltaY = y2 - y1;

  return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

console.log(
  vectorLength([
    [0, 3],
    [4, 0],
  ])
); //5
