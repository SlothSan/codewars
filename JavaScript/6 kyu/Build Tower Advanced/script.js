/*
Build Tower Advanced
Build Tower by the following given arguments:

number of floors (integer and always greater than 0)
block size (width, height) (integer pair and always greater than (0, 0))
Tower block unit is represented as *. Tower blocks of block size (2, 1) and (2, 3) would look like respectively:

  **
  **
  **
  **
for example, a tower of 3 floors with block size = (2, 3) looks like below

[
  '    **    ',
  '    **    ',
  '    **    ',
  '  ******  ',
  '  ******  ',
  '  ******  ',
  '**********',
  '**********',
  '**********'
]
and a tower of 6 floors with block size = (2, 1) looks like below

[
  '          **          ', 
  '        ******        ', 
  '      **********      ', 
  '    **************    ', 
  '  ******************  ', 
  '**********************'
]
Don't return a whole string containing line-endings but a list/array/vector of strings instead!

This kata might looks like a 5.5kyu one. So challenge yourself!

Go take a look at Build Tower which is a more basic version :)
*/

const towerBuilder = (nFloors, nBlockSz) => {
  let [width, height] = nBlockSz;
  let floors = [];
  for (let i = 0, n = nFloors - 1; i < nFloors; i++, n--) {
    for (let j = 0; j < height; j++) {
      floors.push(
        Array(n * width + 1).join(" ") +
          Array((i * 2 + 1) * width + 1).join("*") +
          Array(n * width + 1).join(" ")
      );
    }
  }
  return floors;
};

console.log(towerBuilder(3, [4, 2]));
/*
[
  '        ****        ',
  '        ****        ',
  '    ************    ',
  '    ************    ',
  '********************',
  '********************'
]
*/
