/* 
Create the hero move method
Create a move method for your hero to move through the level.

Adjust the hero's position by changing the position attribute. The level is a grid with the following values:

00	01	02	03	04
10	11	12	13	14
20	21	22	23	24
30	31	32	33	34
40	41	42	43	44

The dir argument will be a string

up
down
left
right
If the position is not inside the level grid the method should throw an error and not move the hero
*/

Hero.prototype.move = function (dir) {
  const x = Math.floor(this.position / 10);
  const y = this.position % 10;
  let newX = x;
  let newY = y;

  switch (dir) {
    case "up":
      newX -= 1;
      break;
    case "down":
      newX += 1;
      break;
    case "left":
      newY -= 1;
      break;
    case "right":
      newY += 1;
      break;
    default:
      throw new Error(
        "Invalid direction. Use 'up', 'down', 'left', or 'right'."
      );
  }

  if (newX < 0 || newX > 4 || newY < 0 || newY > 4) {
    throw new Error("Move out of bounds!");
  }

  this.position = String(newX * 10 + newY).padStart(2, "0");
};
