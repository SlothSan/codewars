/*
Given some points (cartesian coordinates), return true if all of them lie on a line. Treat both an empty set and a single point as a line.

onLine([[1,2], [7, 4], [22, 9]]);                 // returns true
onLine([[1,2], [-3, -14], [22, 9]]);              // ret
*/

const onLine = (points) => {
  points = [...new Set(points.map(JSON.stringify))].map(JSON.parse);

  if (points.length <= 1) return true;

  const [x1, y1] = points[0];
  const [x2, y2] = points[1];

  for (let i = 2; i < points.length; i++) {
    const [xi, yi] = points[i];
    if ((yi - y1) * (x2 - x1) !== (y2 - y1) * (xi - x1)) {
      return false;
    }
  }

  return true;
};

console.log(
  onLine([
    [1, 2],
    [7, 4],
    [22, 9],
  ])
); //true
