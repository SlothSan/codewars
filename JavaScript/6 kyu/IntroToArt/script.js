/*
Help prepare for the entrance exams to art school.

It is known in advance that this year, the school chose the symmetric letter “W” as the object for the image, and the only condition for its image is only the size that is not known in advance, so as training, you need to come up with a way that accurately depicts the object.

Write a function that takes an integer and returns a list of strings with a line-by-line image of the object.

Below is an example function:

get_w(3) # should return:
[
'*   *   *',
' * * * * ',
'  *   *  '
]

get_w(5) # should return:
[
'*       *       *',
' *     * *     * ',
'  *   *   *   *  ',
'   * *     * *   ',
'    *       *    '
]
Return an empty list for height < 2.
*/

const getW = (height) => {
  if (height < 2) return [];
  const result = [];
  const width = (height - 1) * 4 + 1;

  for (let row = 0; row < height; row++) {
    const line = Array(width).fill(" ");

    line[row] = "*";
    line[width - row - 1] = "*";

    if (row < height - 1) {
      line[(height - 1) * 2 - row] = "*";
      line[(height - 1) * 2 + row] = "*";
    }

    result.push(line.join(""));
  }

  return result;
};

console.log(getW(5));

/*
[
  '*       *       *',
  ' *     * *     * ',
  '  *   *   *   *  ',
  '   * *     * *   ',
  '    *       *    '
]
*/
