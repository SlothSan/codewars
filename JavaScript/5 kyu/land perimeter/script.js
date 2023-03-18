/*
Given an array arr of strings complete the function landPerimeter by calculating the total perimeter of all the islands. Each piece of land will be marked with 'X' while the water fields are represented as 'O'. Consider each tile being a perfect 1 x 1 piece of land. Some examples for better visualization:

['XOOXO',
 'XOOXO',
 'OOOXO',
 'XXOXO',
 'OXOOO'] 
which represents:

should return: "Total land perimeter: 24".

Following input:

['XOOO',
 'XOXO',
 'XOXO',
 'OOXX',
 'OOOO']
which represents:

should return: "Total land perimeter: 18"
*/

const landPerimeter = (arr) => {
  let perimeter = 0;
  for (let x = 0; x < arr.length; x++) {
    for (let y = 0; y < arr[x].length; y++) {
      if (arr[x][y] === "X") {
        if (arr[x - 1] === undefined) {
          perimeter++;
        } else {
          if (arr[x - 1][y] !== "X") {
            perimeter++;
          }
        }
        if (arr[x + 1] === undefined) {
          perimeter++;
        } else {
          if (arr[x + 1][y] !== "X") {
            perimeter++;
          }
        }
        if (arr[x] === undefined) {
          perimeter++;
        } else {
          if (arr[x][y - 1] !== "X") {
            perimeter++;
          }
          if (arr[x][y + 1] !== "X") {
            perimeter++;
          }
        }
      }
    }
  }
  return `Total land perimeter: ${perimeter}`;
};

console.log(
  landPerimeter([
    "OXOOOX",
    "OXOXOO",
    "XXOOOX",
    "OXXXOO",
    "OOXOOX",
    "OXOOOO",
    "OOXOOX",
    "OOXOOO",
    "OXOOOO",
    "OXOOXX",
  ])
); //Total land perimeter: 60
