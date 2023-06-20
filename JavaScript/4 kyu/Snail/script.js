const snail = (array) => {
  let result = [];
  const rows = array.length;
  const cols = array[0].length;

  let top = 0,
    bottom = rows,
    left = 0,
    right = cols - 1;
  let direction = 1;

  while (top <= bottom && left <= right) {
    if (direction === 1) {
      for (let i = left; i <= right; i++) {
        result.push(array[top][i]);
      }
      top++;
      direction = 2;
    } else if (direction === 2) {
      for (let i = top; i <= bottom; i++) {
        result.push(array[i][right]);
      }
      --right;
      direction = 3;
    } else if (direction === 3) {
      for (let i = right; i >= left; i--) {
        result.push(array[bottom][i]);
      }
      --bottom;
      dir = 4;
    } else if (direction === 4) {
      for (let i = bottom; i >= top; i--) {
        result.push(array[i][left]);
      }
      ++left;
      dir = 1;
    }
  }
  return result;
};

console.log(
  snail([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
