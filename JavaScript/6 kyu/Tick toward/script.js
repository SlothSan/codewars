/* 
Define a function that generates medial values between two coordinates and returns them in an array from start to target. For example, if the starting point is [1,1] and the target point is [3,2] then the shortest route from start to target would be [[1,1], [2,2], [3,2]]. The route should go only through integral coordinates.

Note: you should move diagonally until the path from your current position to the target can be represented as a fully horizontal/vertical line.

Examples:
tickToward([5,5],[5,7])  // => [[5,5],[5,6],[5,7]]
tickToward([3,2],[4,5])  // => [[3,2],[4,3],[4,4],[4,5]]
tickToward([5,1],[5,-2]) // => [[5,1],[5,0],[5,-1],[5,-2]]
*/

const tickToward = (start, end) => {
  let path = [start];
  let [x, y] = start;
  const [targetX, targetY] = end;

  while (x !== targetX || y !== targetY) {
    if (x < targetX) {
      x++;
    } else if (x > targetX) {
      x--;
    }

    if (y < targetY) {
      y++;
    } else if (y > targetY) {
      y--;
    }

    path.push([x, y]);
  }

  return path;
};

console.log(tickToward([5, 1], [5, -2]));
//[ [ 5, 1 ], [ 5, 0 ], [ 5, -1 ], [ 5, -2 ] ]
