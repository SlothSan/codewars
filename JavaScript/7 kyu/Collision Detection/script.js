/*
Create a function to determine whether or not two circles are colliding. You will be given the position of both circles in addition to their radii:

function collision(x1, y1, radius1, x2, y2, radius2) {
  // collision?
}
If a collision is detected, return true. If not, return false.

Here's a geometric diagram of what the circles passed in represent:
*/

const collision = (x1, y1, radius1, x2, y2, radius2) => {
  const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
  if (distance <= radius1 + radius2) {
    return true;
  } else {
    return false;
  }
};

console.log(collision(1, 1, 1, 1.1, 1.1, 0.1));
//true
