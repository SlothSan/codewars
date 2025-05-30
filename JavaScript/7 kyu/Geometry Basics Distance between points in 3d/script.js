/* 
This series of katas will introduce you to basics of doing geometry with computers.

Point objects have x, y, and z attributes. For Haskell there are Point data types described with record syntax with fields x, y, and z.

Write a function calculating distance between Point a and Point b.

Tests round answers to 6 decimal places. Tests in Haskell will not round.
*/

const distanceBetweenPoints = (a, b) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const dz = b.z - a.z;

  const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

  return parseFloat(distance.toFixed(6));
};
