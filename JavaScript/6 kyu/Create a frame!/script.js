/*
*************************
*  Create a frame!      *
*           __     __   *
*          /  \~~~/  \  *
*    ,----(     ..    ) *
*   /      \__     __/  *
*  /|         (\  |(    *
* ^  \  /___\  /\ |     *
*    |__|   |__|-..     *
*************************
Given an array of strings and a character to be used as border, output the frame with the content inside.

Notes:

Always keep a space between the input string and the left and right borders.
The biggest string inside the array should always fit in the frame.
The input array is never empty.
Example
frame(['Create', 'a', 'frame'], '+')

Output:

++++++++++
+ Create +
+ a      +
+ frame  +
++++++++++
*/

const frame = (text, char) => {
  const maxLength = Math.max(...text.map((str) => str.length));
  const horizontalBorder = char.repeat(maxLength + 4); // Add 4 for the extra characters: two spaces and a border character on each side

  text = text.map((str) => {
    const spaces = " ".repeat(maxLength - str.length);
    return `${char} ${str}${spaces} ${char}`;
  });
  text.unshift(horizontalBorder);
  text.push(horizontalBorder);
  return text.join("\n");
};

console.log(
  frame(
    [
      " Create a frame!",
      "          __     __",
      "         /  \\~~~/  \\",
      "   ,----(     ..    )",
      "  /      \\__     __/",
      " /|         (\\  |(",
      "^  \\  /___\\  /\\ |",
      "   |__|   |__|-..",
    ],
    "*"
  )
);

/*
 *************************
 *  Create a frame!      *
 *           __     __   *
 *          /  \~~~/  \  *
 *    ,----(     ..    ) *
 *   /      \__     __/  *
 *  /|         (\  |(    *
 * ^  \  /___\  /\ |     *
 *    |__|   |__|-..     *
 *************************
 */
